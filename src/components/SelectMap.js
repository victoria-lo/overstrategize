import { Box, Text, Flex, Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";


export default function SelectMap({setMap, map}){
    return(
        <Flex wrap="wrap" mt={2}>
        <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
        <Text px={5} py={2} fontWeight="700" fontSize="xl">MAP</Text>
        </Box>
        <Menu>
        <MenuButton as={Button} mx={1} className="menu-btn" rightIcon={<BiChevronDown/>}>
            {map}
        </MenuButton>
        <MenuList className="menu-list">
            <MenuItem className="menu-item" value="None"onClick={(e)=>{setMap(e.target.value)}}>NONE</MenuItem>
            <MenuItem className="menu-item" value="Hanamura"onClick={(e)=>{setMap(e.target.value)}}>HANAMURA</MenuItem>
            <MenuItem className="menu-item" value="Horizon Lunar Colony"onClick={(e)=>{setMap(e.target.value)}}>HORIZON LUNAR COLONY</MenuItem>
            <MenuItem className="menu-item" value="Temple of Anubis"onClick={(e)=>{setMap(e.target.value)}}>TEMPLE OF ANUBIS</MenuItem>
            <MenuItem className="menu-item" value="Paris"onClick={(e)=>{setMap(e.target.value)}}>PARIS</MenuItem>
            <MenuItem className="menu-item" value="Volskaya Industries"onClick={(e)=>{setMap(e.target.value)}}>VOLSKAYA INDUSTRIES</MenuItem>
            <MenuItem className="menu-item" value="Dorado"onClick={(e)=>{setMap(e.target.value)}}>DORADO</MenuItem>
            <MenuItem className="menu-item" value="Havana"onClick={(e)=>{setMap(e.target.value)}}>HAVANA</MenuItem>
            <MenuItem className="menu-item" value="Junkertown"onClick={(e)=>{setMap(e.target.value)}}>JUNKERTOWN</MenuItem>
            <MenuItem className="menu-item" value="Rialto"onClick={(e)=>{setMap(e.target.value)}}>RIALTO</MenuItem>
            <MenuItem className="menu-item" value="Route 66"onClick={(e)=>{setMap(e.target.value)}}>ROUTE 66</MenuItem>
            <MenuItem className="menu-item" value="Watchpoint: Gibraltar"onClick={(e)=>{setMap(e.target.value)}}>WATCHPOINT: GIBRALTAR</MenuItem>
            <MenuItem className="menu-item" value="Ilios"onClick={(e)=>{setMap(e.target.value)}}>ILIOS</MenuItem>
            <MenuItem className="menu-item" value="Busan"onClick={(e)=>{setMap(e.target.value)}}>BUSAN</MenuItem>
            <MenuItem className="menu-item" value="Lijiang Tower"onClick={(e)=>{setMap(e.target.value)}}>LIJIANG TOWER</MenuItem>
            <MenuItem className="menu-item" value="Nepal"onClick={(e)=>{setMap(e.target.value)}}>NEPAL</MenuItem>
            <MenuItem className="menu-item" value="Blizzard World"onClick={(e)=>{setMap(e.target.value)}}>BLIZZARD WORLD</MenuItem>
            <MenuItem className="menu-item" value="Eichenwalde"onClick={(e)=>{setMap(e.target.value)}}>EICHENWALDE</MenuItem>
            <MenuItem className="menu-item" value="Hollywood"onClick={(e)=>{setMap(e.target.value)}}>Hollywood</MenuItem>
            <MenuItem className="menu-item" value="King's Row"onClick={(e)=>{setMap(e.target.value)}}>KING'S ROW</MenuItem>
            <MenuItem className="menu-item" value="Oasis"onClick={(e)=>{setMap(e.target.value)}}>OASIS</MenuItem>
            <MenuItem className="menu-item" value="Numbani"onClick={(e)=>{setMap(e.target.value)}}>NUMBANI</MenuItem>
        </MenuList>
        </Menu>
    </Flex>
    )
}