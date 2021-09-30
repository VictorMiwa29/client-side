import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Flex, Image, Text, UnorderedList, ListItem, Spinner } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
const axios = require('axios');

function DetailsPage() {
  const [api, setApi] = useState({});
  const [fav, setFav] = useState('black');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchApi() {
      const user = JSON.parse(localStorage.getItem('user'));

      const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=eed2a194a8215263a1c9ce65055b76cc&hash=d35d5108f78529a8bd758e77a9ccaba2`);

      const { data: { favorites } } = await axios.post(`http://localhost:3001/favorites`, { id: user.id })
      const exist = favorites.find((fav) => fav.id === parseInt(id))
      if (exist) setFav('yellow');

      setApi(results[0]);
    }

    fetchApi();
  }, [id]);

  function redirectComicDetail(link) {
    const idComic = link.split('/').pop();
    history.push(`/comic/${idComic}`);
  }

  async function favorite() {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const icon = document.getElementById('favorite')
    if (icon.style.color !== 'yellow') {
      icon.style.color = 'yellow';
      await axios.post('http://localhost:3001/character/favorite', {
        idUser: id,
        idCharacter: api.id,
        nameCharacter: api.name,
        image: `${api.thumbnail.path}/standard_fantastic.${api.thumbnail.extension}`
      })
    } else {
      icon.style.color = 'black';
      await axios.post('http://localhost:3001/character/disfavor', {
        idUser: id,
        idCharacter: api.id,
      })
    }
  }

  if (Object.keys(api).length === 0) return (
    <Flex
      justify="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bg="white"
    >
      <Spinner size="xl" color="red.600"/>
    </Flex>)

  return (
    <Flex p="10" bg="white" minH={'100vh'}>
      <Image src={`${api.thumbnail.path}/portrait_incredible.${api.thumbnail.extension}`}  height="sm"/>
      <Flex flexDirection="column" height="sm">
        <Text marginLeft="10" color="black">Name: {api.name}</Text>
        <Text marginLeft="10" color="black">Description: {api.description}</Text>
        <Text marginLeft="10" color="black" as="div">
          Comics:
          <UnorderedList listStyleType="none" display="flex" flexWrap="wrap" color="black">
            { api.comics.items.map((comic, index) => (
              <ListItem
                key={index}
                margin="1"
                _hover={{ cursor: "pointer", color: "red"}}
                onClick={ () => redirectComicDetail(comic.resourceURI) }
              >
                { comic.name } |
              </ListItem>
            )) }
          </UnorderedList>
        </Text>
      </Flex>
      <StarIcon style={{ color: fav }} id="favorite" marginLeft="10px" _hover={{ cursor: "pointer" }} onClick={ (e) => favorite(e) } />
    </Flex>
  )
}

export default DetailsPage;
