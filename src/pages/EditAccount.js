import React from 'react';
import EditForm from '../components/EditForm';
import HeaderLayout from '../components/HeaderLayout';
import { ChakraProvider } from '@chakra-ui/react';

function EditAccount() {
  return (
    <ChakraProvider>
      <HeaderLayout />
      <EditForm />
    </ChakraProvider>
  )
}

export default EditAccount;
