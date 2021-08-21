import React, { useEffect, useState } from 'react';
import { Flex, Input, Wrap, InputLeftElement, InputGroup, Button,
 WrapItem, Box, Spinner } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import HomeListCard from './HomeListCard';
const axios = require('axios');

function HomePage() {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchBar, setSeachBar] = useState('');
  const [options, setOptions] = useState('characters');

  async function fecthApi(options = 'characters') {
    const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/${options}?limit=20&ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2`)

    setLoading(false);
    return setApi(results);
  }

  async function onChange(e) {
    setOptions(e.target.name);
    setLoading(true);
    await fecthApi(e.target.name)
  }

  function handleChange(e) {
    setSeachBar(e.target.value);
  }

  async function searchButton() {
    const nameSearch = options === 'characters' ? 'name' : 'title';
    setLoading(true);
    setSeachBar('');

    const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/${options}?${nameSearch}StartsWith=${searchBar}&limit=20&ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2`);

    setLoading(false);
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
                  color="white"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Pesquise"
                  borderRadius="50px"
                  borderColor="white"
                  color="white"
                  value={ searchBar }
                  onChange={ (e) => handleChange(e) }
                  width="80vh"
                />
              </InputGroup>
            </WrapItem>
            <WrapItem>
              <Button colorScheme="red" onClick={ (e) => searchButton(e) }>Pesquisar</Button>
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap justify="center" spacing="80px" p="5">
            <WrapItem>
              <Button
                variant="link"
                name="characters"
                color="white"
                onClick={ (e) => onChange(e) }
              >
                Characters
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                variant="link"
                name="comics"
                color="white"
                onClick={ (e) => onChange(e) }
              >
                Comics
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                variant="link"
                name="favorites"
                color="white"
                onClick={ (e) => onChange(e) }
              >
                Favorites
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Flex flexWrap="wrap" justify="center" width="100vw">
        { loading ? <Spinner size="xl" color="red.600"/> : api.map((card, index) => {
          return <HomeListCard card={card} key={index} />
        })}
      </Flex>
    </Flex>
  )
}

export default HomePage;
