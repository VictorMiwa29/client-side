import React from 'react';
import HomePage from '../components/HomePage';
import HeaderLayout from '../components/HeaderLayout';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
  return (
    <ChakraProvider>
      <HeaderLayout />
      <HomePage />
    </ChakraProvider>
  )
}

export default Login;
