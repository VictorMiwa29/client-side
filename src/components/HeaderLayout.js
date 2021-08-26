import { EditIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { useHistory } from 'react-router';
import React from 'react';

function HeaderLayout() {
  const history = useHistory();

  function redirect(local) {
    if (local === 'home') return history.push('/');

    return history.push('/edit');
  }

  function exitButton() {
    localStorage.clear();
    return history.push('/login');
  }

  return (
    <Flex justify="space-between" bg="black">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon color="white" />}
          variant="outline"
          borderColor="black"
          _hover="none"
        />
        <MenuList>
          <MenuItem icon={<AiOutlineHome />} onClick={ () => redirect('home') }>
            Home
          </MenuItem>
          <MenuItem icon={<EditIcon />} onClick={ () => redirect() }>
            Edit Account
          </MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        aria-label="Exit Account"
        icon={<CloseIcon color="white" />}
        bg="black"
        _hover="none"
        onClick={ exitButton }
      />
    </Flex>
  )
}

export default HeaderLayout;
