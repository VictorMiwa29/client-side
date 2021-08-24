import { EditIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import React from 'react';

function HeaderLayout() {
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
          <MenuItem icon={<AiOutlineHome />}>
            Home
          </MenuItem>
          <MenuItem icon={<EditIcon />}>
            Edit Account
          </MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        aria-label="Exit Account"
        icon={<CloseIcon color="white" />}
        bg="black"
        _hover="none"
      />
    </Flex>
  )
}

export default HeaderLayout;
