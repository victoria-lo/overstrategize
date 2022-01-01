import { Box, Text, Flex, Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

 export default function SelectTier({setTier, tier}){
    
    return(
    <Flex wrap="wrap" mt={2}>
    <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
    <Text px={5} py={2} fontWeight="700" fontSize="xl">TIER</Text>
    </Box>
    <Menu>
      <MenuButton as={Button} mx={1} className="menu-btn" rightIcon={<BiChevronDown/>}>
        {tier}
      </MenuButton>
      <MenuList className="menu-list">
        <MenuItem className="menu-item" value="None" onClick={(e)=>{setTier(e.target.value)}}>NONE</MenuItem>
        <MenuItem className="menu-item" value="All" onClick={(e)=>{setTier(e.target.value)}}>ALL</MenuItem>
        <MenuItem className="menu-item" value="Bronze" onClick={(e)=>{setTier(e.target.value)}}>BRONZE</MenuItem>
        <MenuItem className="menu-item" value="Silver" onClick={(e)=>{setTier(e.target.value)}}>SILVER</MenuItem>
        <MenuItem className="menu-item" value="Gold" onClick={(e)=>{setTier(e.target.value)}}>GOLD</MenuItem>
        <MenuItem className="menu-item" value="Platinum" onClick={(e)=>{setTier(e.target.value)}}>PLATINUM</MenuItem>
        <MenuItem className="menu-item" value="Diamond"onClick={(e)=>{setTier(e.target.value)}}>DIAMOND</MenuItem>
        <MenuItem className="menu-item" value="Master"onClick={(e)=>{setTier(e.target.value)}}>MASTER</MenuItem>
        <MenuItem className="menu-item" value="Grand Master"onClick={(e)=>{setTier(e.target.value)}}>GRAND MASTER</MenuItem>
        <MenuItem className="menu-item" value="Overwatch League"onClick={(e)=>{setTier(e.target.value)}}>OVERWATCH LEAGUE</MenuItem>
        <MenuItem className="menu-item" value="MetaBomb"onClick={(e)=>{setTier(e.target.value)}}>METABOMB</MenuItem>
      </MenuList>
    </Menu>
  </Flex>)
  }