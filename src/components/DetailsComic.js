import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Flex, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
const axios = require('axios');

function DetailsPage() {
  const [api, setApi] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchApi() {
      const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2`);

      setApi(results[0]);
    }

    fetchApi();
  }, [id]);

  function redirectcharacterDetail(link) {
    const idCharacter = link.split('/').pop();
    history.push(`/character/${idCharacter}`);
  }

  if (Object.keys(api).length === 0) return (<h1>Carregando...</h1>)

  return (
    <Flex p="10" bg="black" minH={'100vh'}>
      <Image src={`${api.thumbnail.path}/portrait_incredible.${api.thumbnail.extension}`}  height="sm"/>
      <Flex flexDirection="column" border="1px" height="sm" borderColor="white">
        <Text marginLeft="10" color="white">Title: {api.title}</Text>
        <Text marginLeft="10" color="white" as="div">
          Characters:
          <UnorderedList listStyleType="none" display="flex" flexWrap="wrap" color="white">
            { api.characters.items.map((character, index) => (
              <ListItem key={index} margin="1" _hover={{ cursor: "pointer", color: "blue" }} onClick={ () => redirectcharacterDetail(character.resourceURI) }>
                { character.name } |
              </ListItem>
            )) }
          </UnorderedList>
        </Text>
      </Flex>
    </Flex>
    // <Flex>
    //   <Image src={`${api.thumbnail.path}.${api.thumbnail.extension}`}/>
    //   <Flex flexDirection="column">
    //     <Text>Title: {api.title}</Text>
    //     <Text as="div">
    //       Characters:
    //       <UnorderedList>
    //         { api.characters.items.map((comic, index) => (
    //           <ListItem key={index}>
    //             { comic.name }
    //           </ListItem>
    //         )) }
    //       </UnorderedList>
    //     </Text>
    //   </Flex>
    // </Flex>
  )
}

export default DetailsPage;
