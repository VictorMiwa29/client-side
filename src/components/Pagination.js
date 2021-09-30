import React from 'react';
import { UnorderedList, ListItem, Button } from '@chakra-ui/react';

const Max_ITEMS = 9;
const MAX_LEFT = (Max_ITEMS - 1) / 2;

function Pagination({ limit, total, offset, setOffset, setLoading }) {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onClick(page) {
    setOffset((page - 1) * limit)
    setLoading(true)
  }

  return (
    <UnorderedList color="white" display="flex">
      { Array.from({ length: Math.min(Max_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page, index) => (
          <ListItem key={index} listStyleType="none">
            <Button
              onClick={() => onClick(page)}
              color="black"
              variant="link"
            >
              {page}
            </Button>
          </ListItem>
        ))
      }
    </UnorderedList>
  )
}

export default Pagination;
