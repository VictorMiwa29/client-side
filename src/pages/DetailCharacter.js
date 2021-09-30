import React from 'react';
import DetailsCharacter from '../components/DetailsCharacter';
import HeaderLayout from '../components/HeaderLayout';
import { ChakraProvider } from '@chakra-ui/react';

function DetailCharacter() {
  return (
    <ChakraProvider>
      <HeaderLayout />
      <DetailsCharacter />
    </ChakraProvider>
  )
}

export default DetailCharacter;
