import React from 'react';
import DetailsCharacter from '../components/DetailsCharacter';
import { ChakraProvider } from '@chakra-ui/react';

function DetailCharacter() {
  return (
    <ChakraProvider>
      <DetailsCharacter />
    </ChakraProvider>
  )
}

export default DetailCharacter;
