import { Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";


export default function SelectHero({group, index, setTeam}){
    return(
        <Menu>
        <MenuButton as={Button} mx={1} className="menu-btn" rightIcon={<BiChevronDown/>}>
          {group[index]}
        </MenuButton>
        <MenuList className="menu-list">
            <MenuItem className="menu-item" value="None"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>NONE</MenuItem>
            <MenuItem className="menu-item" value="Ana"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ANA</MenuItem>
            <MenuItem className="menu-item" value="Ashe"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ASHE</MenuItem>
            <MenuItem className="menu-item" value="Baptiste"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>BAPTISTE</MenuItem>
            <MenuItem className="menu-item" value="Bastion"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>BASTION</MenuItem>
            <MenuItem className="menu-item" value="Brigitte"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>BRIGITTE</MenuItem>
            <MenuItem className="menu-item" value="D.Va"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>D.VA</MenuItem>
            <MenuItem className="menu-item" value="Doomfist"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>DOOMFIST</MenuItem>
            <MenuItem className="menu-item" value="Echo"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ECHO</MenuItem>
            <MenuItem className="menu-item" value="Genji"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>GENJI</MenuItem>
            <MenuItem className="menu-item" value="Hanzo"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>HANZO</MenuItem>
            <MenuItem className="menu-item" value="Junkrat"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>JUNKRAT</MenuItem>
            <MenuItem className="menu-item" value="Lucio"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>LUCIO</MenuItem>
            <MenuItem className="menu-item" value="Cassidy"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>CASSIDY</MenuItem>
            <MenuItem className="menu-item" value="Mei"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>MEI</MenuItem>
            <MenuItem className="menu-item" value="Mercy"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>MERCY</MenuItem>
            <MenuItem className="menu-item" value="Moira"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>MOIRA</MenuItem>
            <MenuItem className="menu-item" value="Orisa"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ORISA</MenuItem>
            <MenuItem className="menu-item" value="Pharah"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>PHARAH</MenuItem>
            <MenuItem className="menu-item" value="Reaper"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>REAPER</MenuItem>
            <MenuItem className="menu-item" value="Reinhardt"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>REINHARDT</MenuItem>
            <MenuItem className="menu-item" value="Roadhog"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ROADHOG</MenuItem>
            <MenuItem className="menu-item" value="Sigma"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>SIGMA</MenuItem>
            <MenuItem className="menu-item" value="Soldier: 76"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>SOLDIER :76</MenuItem>
            <MenuItem className="menu-item" value="Sombra"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>SOMBRA</MenuItem>
            <MenuItem className="menu-item" value="Symmetra"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>SYMMETRA</MenuItem>
            <MenuItem className="menu-item" value="Torbjörn"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>TORBJöRN</MenuItem>
            <MenuItem className="menu-item" value="Tracer"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>TRACER</MenuItem>
            <MenuItem className="menu-item" value="Widowmaker"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>WIDOWMAKER</MenuItem>
            <MenuItem className="menu-item" value="Winston"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>WINSTON</MenuItem>
            <MenuItem className="menu-item" value="Wrecking Ball"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>WRECKING BALL</MenuItem>
            <MenuItem className="menu-item" value="Zarya"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ZARYA</MenuItem>
            <MenuItem className="menu-item" value="Zenyatta"onClick={(e)=>{
            let team = [...group];
            team[index] = e.target.value;
            setTeam(team);
          }}>ZENYATTA</MenuItem>
        </MenuList>
      </Menu>
    )
}