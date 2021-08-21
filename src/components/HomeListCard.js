import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react"

function HomeListCard({name, description, image}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="20px">
      <Image src={`${image.path}/standard_fantastic.${image.extension}`} alt={name} />
      <Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color="white"
          textAlign="center"
        >
          { name }
        </Box>
        <Box color="white">
          <Text>{ description }</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeListCard;
