import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { ChakraProvider } from '@chakra-ui/react';


function Register() {
  return (
    <ChakraProvider>
      <RegisterForm />
    </ChakraProvider>
  )
}

export default Register;
