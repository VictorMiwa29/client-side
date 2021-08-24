import { Flex, HStack, Text, Input, Box, Button,
  InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, LockIcon } from '@chakra-ui/icons';
import React from 'react';

function EditForm() {
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
              borderColor="black"
              _placeholder={{color: 'black'}}
              focusBorderColor="black"
              _hover="none"
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
              />
            </InputGroup>
          </Box>
        </HStack>
        <Button width="250px" marginTop="50px" bg="black" color="white">Edit</Button>
    </Flex>
  );
}

export default EditForm;
