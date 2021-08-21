import React from 'react';
import { Box, Image } from "@chakra-ui/react"

function HomeListCard({ card }) {
  const { name, thumbnail, title = '' } = card;
  return (
    <Box maxW="250px" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="20px">
      <Image src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} alt={name} />
      <Box
        mt="1"
        fontWeight="semibold"
        color="white"
        textAlign="center"
        alignContent="center"
      >
        { title ? title : name }
      </Box>
    </Box>
  );
}

export default HomeListCard;
