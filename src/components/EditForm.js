import { Flex, HStack, Text, Input, Box, Button,
  InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, LockIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const crypto = require('crypto');

function EditForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [oldUser, setOldUser] = useState({});
  const [validate, setValidate] = useState(false);
  
  function validateRegister() {
    if (!firstName) {
      return true;
    } else if (!password || password.length < 8) {
      return true;
    } else if (!email || !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return true;
    }
  }

  useEffect(() => {
    async function findUser() {
      const user = JSON.parse(localStorage.getItem('user'));
      setOldUser(user);

      try {
        const { data } = await axios.post('http://localhost:3001/find', {
          email: user.email,
        });

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setphone(data.phone);
      } catch (error) {
        console.error(error);
      }
    }

    findUser();
  }, []);

  async function updateButton() {
    const validate = validateRegister()

    if (validate) return setValidate(true);

    try {
      await axios.put('http://localhost:3001/edit', {
        firstName,
        lastName,
        email,
        password: crypto.createHash('md5').update(password).digest('hex'),
        phone,
        oldEmail: oldUser.email,
      });

      localStorage.setItem('user', JSON.stringify({ id: oldUser.id, name: firstName, email, token: oldUser.token }))

      alert('Atualizado com sucesso!!');
    } catch (error) {
      setValidate(true);
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align="center"
      flexDirection="column"
      margin="50"
    >
        <HStack>
          <Box p="0.5">
            <Text mb="8px" fontWeight="bold">First Name</Text>
              <Input
                placeholder="First Name"
                width="500px"
                borderColor="black"
                _placeholder={{color: 'black'}}
                focusBorderColor="black"
                _hover="none"
                onChange={ (e) => setFirstName(e.target.value) }
                value={firstName}
              />
          </Box>
          <Box>
            <Text mb="8px" fontWeight="bold">Last Name</Text>
              <Input
                placeholder="Last Name"
                width="500px"
                borderColor="black"
                _placeholder={{color: 'black'}}
                focusBorderColor="black"
               _hover="none"
               onChange={ (e) => setLastName(e.target.value) }
               value={lastName}
              />
          </Box>
        </HStack>
        <Box p="5">
          <Text mb="8px" fontWeight="bold">Email</Text>
          <InputGroup>
            <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={EmailIcon} color="black" />}
            />
            <Input
              placeholder="Email"
              width="1010px"
              borderColor="black"
              _placeholder={{color: 'black'}}
              focusBorderColor="black"
              _hover="none"
              onChange={ (e) => setEmail(e.target.value) }
              value={email}
            />
          </InputGroup>
        </Box>
        <HStack>
          <Box>
            <Text mb="8px" fontWeight="bold">Password</Text>
            <InputGroup>
            <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={LockIcon} color="black" />}
            />
            <Input
              placeholder="Password"
              width="500px"
              type="password"
              borderColor="black"
              _placeholder={{color: 'black'}}
              focusBorderColor="black"
              _hover="none"
              onChange={ (e) => setPassword(e.target.value) }
            />
            </InputGroup>
          </Box>
          <Box>
            <Text mb="8px" fontWeight="bold">Phone</Text>
            <InputGroup>
              <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={PhoneIcon} color="black" />}
              />
              <Input
                placeholder="Phone"
                width="500px"
                borderColor="black"
                _placeholder={{color: 'black'}}
                focusBorderColor="black"
              _hover="none"
              onChange={ (e) => setphone(e.target.value) }
              value={phone}
              />
            </InputGroup>
          </Box>
        </HStack>
        { validate ? <Text>Campos Inválidos</Text> : <span /> }
        <Button width="250px" marginTop="50px" bg="black" color="white" onClick={ () => updateButton() }>Edit</Button>
    </Flex>
  );
}

export default EditForm;
