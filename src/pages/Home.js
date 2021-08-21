import React from 'react';
import HomeListCard from '../components/HomeListCard';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
  return (
    <ChakraProvider>
      <HomeListCard />
    </ChakraProvider>
  )
}

export default Login;
