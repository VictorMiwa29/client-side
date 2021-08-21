import React from 'react';
import HomePage from '../components/HomePage';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  )
}

export default Login;
