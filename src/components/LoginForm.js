import React, { useState, useEffect } from 'react';
import { Flex, Box, FormControl, Input, Checkbox, Stack, Link,
  Button, Heading, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { EmailIcon, LockIcon} from '@chakra-ui/icons';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const saveLoginStorage = JSON.parse(localStorage.getItem('saveLogin'));
    if (saveLoginStorage) {
      const { email, password } = saveLoginStorage;
      setEmail(email)
      setPassword(password)
    }
  },[setEmail, setPassword]);

  async function handleClick() {
  }

  function handleChange(e, name = '') {
    if (name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  function saveLogin(e) {
    if (e.target.checked) {
      localStorage.setItem('saveLogin', JSON.stringify({ email, password }))
    } else {
      localStorage.removeItem('saveLogin');
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgImage="url('/images/erik-mclean-27kCu7bXGEI-unsplash.jpg')"
      bgSize="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      opacity="1"
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="70vh">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color="white" fontWeight="bold">Entre na sua conta</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}
          bgColor="white"
        >
          <Stack spacing={10}>
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="black" />}
                />
                <Input
                  variant="flushed"
                  type="email"
                  placeholder="Email"
                  _placeholder={{ color: 'black' }}
                  focusBorderColor="black"
                  borderColor="black"
                  value={ email }
                  onChange={ (e) => handleChange(e, 'email') }
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<LockIcon color="black" />}
                />
                <Input
                  variant="flushed"
                  type="password"
                  placeholder="Senha"
                  color="black"
                  _placeholder={{ color: 'black' }}
                  focusBorderColor="black"
                  borderColor="black"
                  value={ password }
                  onChange={ (e) => handleChange(e) }
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox
                  color="black"
                  borderColor="black"
                  colorScheme="red"
                  onChange={ (e) => saveLogin(e) }
                >
                  Lembre me
                </Checkbox>
              </Stack>
              <Button
                bg={'red.600'}
                color={'white'}
                _hover={{
                  bg: 'red.400',
                }}
                boxShadow="none"
                onClick={ handleClick }  
              >
                Login
              </Button>
              <Link
                textAlign="center"
                color="black"
                fontSize="sm"
                href="/register"
              >
                Ainda não tem cadastro? clique aqui!
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm;
