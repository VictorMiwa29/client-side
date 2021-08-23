import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Flex, Image, Text, UnorderedList, ListItem, Spinner } from '@chakra-ui/react';
const axios = require('axios');

function DetailsPage() {
  const [api, setApi] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchApi() {
      const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2`);

      setApi(results[0]);
    }

    fetchApi();
  }, [id]);

  function redirectComicDetail(link) {
    const idComic = link.split('/').pop();
    history.push(`/comic/${idComic}`);
  }

  if (Object.keys(api).length === 0) return (
    <Flex
      justify="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bg="black"
    >
      <Spinner size="xl" color="red.600"/>
    </Flex>)

  return (
    <Flex p="10" bg="black" minH={'100vh'}>
      <Image src={`${api.thumbnail.path}/portrait_incredible.${api.thumbnail.extension}`}  height="sm"/>
      <Flex flexDirection="column" height="sm">
        <Text marginLeft="10" color="white">Name: {api.name}</Text>
        <Text marginLeft="10" color="white">Description: {api.description}</Text>
        <Text marginLeft="10" color="white" as="div">
          Comics:
          <UnorderedList listStyleType="none" display="flex" flexWrap="wrap" color="white">
            { api.comics.items.map((comic, index) => (
              <ListItem key={index} margin="1" _hover={{ cursor: "pointer", color: "blue" }} onClick={ () => redirectComicDetail(comic.resourceURI) }>
                { comic.name } |
              </ListItem>
            )) }
          </UnorderedList>
        </Text>
      </Flex>
    </Flex>
  )
}

export default DetailsPage;
