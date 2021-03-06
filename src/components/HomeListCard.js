import React from 'react';
import { useHistory } from 'react-router';
import { Box, Image } from "@chakra-ui/react"

function HomeListCard({ card }) {
  const { name, thumbnail, title = '', id, image = '' } = card;
  const history = useHistory();

  function onClick(id) {
    if (name) {
      return history.push(`/character/${id}`);
    }

    return history.push(`/comic/${id}`); 
  }

  return (
    <Box
      maxW="250px"
      borderColor="black"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="20px"
      _hover={{ cursor: "pointer" }}
      onClick={(e) => onClick(id)}
    >
      <Image
        src={ image ? image :
          `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`
        } 
        alt={name} 
      />
      <Box
        mt="1"
        fontWeight="semibold"
        color="black"
        textAlign="center"
        alignContent="center"
      >
        { title ? title : name }
      </Box>
    </Box>
  );
}

export default HomeListCard;
