import React from 'react';
import DetailsComic from '../components/DetailsComic';
import HeaderLayout from '../components/HeaderLayout';
import { ChakraProvider } from '@chakra-ui/react';

function DetailComic() {
  return (
    <ChakraProvider>
      <HeaderLayout />
      <DetailsComic />
    </ChakraProvider>
  )
}

export default DetailComic;
