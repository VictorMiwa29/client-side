import React from 'react';
import DetailsComic from '../components/DetailsComic';
import { ChakraProvider } from '@chakra-ui/react';

function DetailComic() {
  return (
    <ChakraProvider>
      <DetailsComic />
    </ChakraProvider>
  )
}

export default DetailComic;
