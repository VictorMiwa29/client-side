import React, { useEffect, useState } from 'react';
import { Flex, Input, Wrap, InputLeftElement, InputGroup, Button,
 WrapItem, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import HomeListCard from './HomeListCard';
const axios = require('axios');

function HomePage() {
  const [api, setApi] = useState([]);

  async function fecthApi() {
    const { data: { data: { results } } } = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2')

    return setApi(results);
  }

  useEffect(() => {
    fecthApi()
  }, []);

  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg="black"
      flexWrap="wrap"
    >
      <Box>
        <Box>
          <Wrap align={'center'} marginTop="10">
            <WrapItem>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Pesquise"
                  borderRadius="50px"
                  width="80vh"
                />
              </InputGroup>
            </WrapItem>
            <WrapItem>
              <Button colorScheme="red">Pesquisar</Button>
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap justify="center" spacing="80px" p="5">
            <WrapItem>
              <Button variant="link" color="white">Characters</Button>
            </WrapItem>
            <WrapItem>
              <Button variant="link" color="white">Comics</Button>
            </WrapItem>
            <WrapItem>
              <Button variant="link" color="white">Favorites</Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Flex flexWrap="wrap" justify="center">
        { api.map((hero, index) => {
          const { name, description, thumbnail } = hero;
          return <HomeListCard name={name} description={description} image={thumbnail} key={index} />
        }) }
      </Flex>
    </Flex>
  )
}

export default HomePage;
