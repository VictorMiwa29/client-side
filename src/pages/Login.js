import React from 'react';
import LoginForm from '../components/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  )
}

export default Login;
