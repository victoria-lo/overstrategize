import '../App.css';
import { 
  useToast, 
  Spinner, 
  Box, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Container, 
  Text, 
  Image, 
  Flex, 
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,AccordionIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid, GridItem
} from "@chakra-ui/react";
import logo from '../img/logo.png';
import {useState, useEffect} from 'react';
import { BiChevronDown } from "react-icons/bi";

import SelectTier from './SelectTier';
import SelectMap from './SelectMap';
import SelectHero from './SelectHero';
import ResultBreakdown from './ResultBreakdown';
//*******PROMISES *************//
import {getMap, getHeroMapRole, getHeroCounter, getHeroSynergy, getHeroImage, getHeroTier, getAllImages} from '../actions'

function Web() {
  // SET BY USER
  const [tier, setTier] = useState("None");
  const [map, setMap] = useState("None"); //to get map type: Assault, Escort, Control or Hybrid and points
  
  const [point, setPoint] = useState("None"); //only after points not []
  const [mapRole, setMapRole] = useState("None");  //only after mapRoles not []
  const [myTeam, setMyTeam] = useState(["None","None","None","None","None","None"]); 
  const [enemyTeam, setEnemyTeam] = useState(["None","None","None","None","None","None"]); 

  const [points, setPoints] = useState([]); //set points array from map and return as options
  const [mapRoles, setMapRoles] = useState([]); 
  const [mapType, setMapType] = useState();
  const [teamImages, setTeamImages] = useState([]); 
  const [enemyImages, setEnemyImages] = useState([]); 

  const [allAllies, setAllAllies] = useState({"Ana":0, "Ashe":0, "Baptiste":0, "Bastion":0, "Brigitte":0,"D.Va":0, "Doomfist":0, "Echo":0,"Genji":0,"Hanzo":0,
  "Junkrat":0,"Lucio":0,"Cassidy":0,"Mei":0,"Mercy":0,"Moira":0,"Orisa":0,"Pharah":0,"Reaper":0,"Reinhardt":0,"Roadhog":0,"Sigma":0,"Soldier: 76":0,"Sombra":0,
  "Symmetra":0,"Torbjörn":0,"Tracer":0,"Widowmaker":0,"Winston":0,"Wrecking Ball":0,"Zarya":0,"Zenyatta":0 });

  const [allImages, setAllImages] = useState({});

  const [allyRecords, setAllyRecords] = useState({
    "ATP":[],
    "AMR":[],
    "AHS":[],
    "AHC":[]
  });

  const [enemyRecords, setEnemyRecords] = useState({
    "ATP":[],
    "AMR":[],
    "AHS":[],
    "AHC":[]
  });

  const [recommendation, setRecommendation] = useState();
  /*If map type 
  = Assault/Escort/Hybrid, setMapRoles(["Attack","Defense"])
  = Control, default as setMapRoles(["Control"])    
  */

  const toast = useToast();
  const id = "toast";

  //points
  const [totalAllyPoints, setAllyTotal] = useState(0);
  const [totalEnemyPoints, setEnemyTotal] = useState(0);

  useEffect(async () => {
    window.scrollTo(0, 0);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        calculatePoints();
      }
      if (e.key === 'Backspace') {
        reset();
      }
    });
    setAllImages(await getAllImages())
  }, []);

  useEffect(() => {
    console.log("ally", totalAllyPoints)
    console.log("enemy",totalEnemyPoints)
    sortRecommendations();
  }, [totalAllyPoints]);

  //update points and map role fields when map is changed
  useEffect(() => {
    if(map!=="None"){
      getMap(map).then(data=>{
        setMapType(data[0]['type']);
        setPoints(data[0]['points']);
        setPoint(data[0]['points'][0])
        if(mapType === "Control"){
          setMapRoles(["Control"])
          setMapRole("Control")
        }else{
          setMapRoles(["Attack", "Defense"])
          setMapRole("Attack") //default
        } 
      })
    }else{
      //reset values
      setPoints([]);
      setMapRoles([]);
      setPoint("None");
      setMapRole("None");
    }
  }, [map]);

  const setHeroImages=(t)=>{
    let team;
    t === "ally"? team = myTeam : team = enemyTeam;
    Promise.all(
      team.map(async (hero) => {
        const url = await getHeroImage(hero);
        return url;
      })
    ).then(data=>{
      t === "ally"? setTeamImages(data): setEnemyImages(data);
    })
  }

  const filterObjects = (sorted, arr) =>{
    let object = Object.keys(sorted)
      .filter(key => arr.includes(key))
      .reduce((obj, key) => {
        obj[key] = sorted[key];
        return obj;
      }, {});
    return object;
  }

  //sort recommendations
  const sortRecommendations=()=>{
    const support_f = ["Ana","Baptiste", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta"];
    const tank_f = ["D.Va","Orisa", "Reinhardt", "Roadhog", "Sigma", "Winston", "Wrecking Ball", "Zarya"];
    const dps_f = ["Ashe","Bastion", "Doomfist", "Echo","Genji","Hanzo","Junkrat","Cassidy", "Mei", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Symmetra"
    , "Torbjörn","Tracer","Widowmaker"];

    const sorted = {};
      Object.entries(allAllies)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, val]) => {
          sorted[key] = val;
        });

      const tanks = filterObjects(sorted, tank_f);

      const dps = filterObjects(sorted, dps_f);

      const supports = filterObjects(sorted, support_f);

      setRecommendation(
        {
          "Tank": tanks,
          "DPS" : dps,
          "Support": supports
        }
      )
  }

  //reset everything
  const reset = () => {
    setTier("None");
    setMap("None");
    setPoint("None");
    setMapRole("None");
    setMyTeam(["None","None","None","None","None","None"]);
    setEnemyTeam(["None","None","None","None","None","None"]);
    setAllyRecords({"ATP":[],"AMR":[],"AHS":[],"AHC":[]});
    setEnemyRecords({"ATP":[],"AMR":[],"AHS":[],"AHC":[]});
    setAllyTotal(0);
    setEnemyTotal(0);
  }

  //calculate points
  const calculatePoints = async() =>{
    //check if all fields are not empty
    if(map!=="None" && tier!=="None" && point !=="None" && mapRole!=="None" && !myTeam.some(team=> team === "None") && !enemyTeam.some(team=> team === "None")){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Calculating... Please wait...",
          description: <Spinner mt={3} ml="40%"/>,
          status: "info",
          position: "top",
          variant: "subtle",
          duration: 3000,
          onCloseComplete:()=>{
            toast({
              title: "Completed! See Results Tab.",
              status: "success",
              position: "top",
              variant: "subtle",
              duration: 2000
            }) 
          }
        })
      }
//********************** RECOMMENDATION PROMISES ***************************//
      let allyHeroes = {"Ana":0, "Ashe":0, "Baptiste":0, "Bastion":0, "Brigitte":0,"D.Va":0, "Doomfist":0, "Echo":0,"Genji":0,"Hanzo":0,
      "Junkrat":0,"Lucio":0,"Cassidy":0,"Mei":0,"Mercy":0,"Moira":0,"Orisa":0,"Pharah":0,"Reaper":0,"Reinhardt":0,"Roadhog":0,"Sigma":0,"Soldier: 76":0,"Sombra":0,
      "Symmetra":0,"Torbjörn":0,"Tracer":0,"Widowmaker":0,"Winston":0,"Wrecking Ball":0,"Zarya":0,"Zenyatta":0 };

      for (const hero in allyHeroes) {
        let tp = await getHeroTier(hero, tier);
        let mr = await getHeroMapRole(hero, mapRole, mapType, point);
        let hs = await getHeroSynergy(hero, "ally", myTeam, enemyTeam)
        let hc = await getHeroCounter(hero, "ally", myTeam, enemyTeam);
        allyHeroes[hero] = tp+mr+hs+hc;
      }
      console.log(allyHeroes)
      setAllAllies(allyHeroes);
      
//********************** ALLY TEAM PROMISES ***************************//
      let records = {
        "ATP":[],
        "AMR":[],
        "AHS":[],
        "AHC":[]
      }
      let enemyRecords = {
        "ATP":[],
        "AMR":[],
        "AHS":[],
        "AHC":[]
      }

      let allyTP = await myTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroTier(hero, tier);
        records.ATP.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let allyMR = await myTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroMapRole(hero, mapRole, mapType, point);
        records.AMR.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let allyHS = await myTeam.reduce(async (acc, hero, currentIndex)=>{
        let tp = await getHeroSynergy(hero, "ally", myTeam, enemyTeam, currentIndex);
        records.AHS.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let allyHC = await myTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroCounter(hero, "ally", myTeam, enemyTeam);
        records.AHC.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      Promise.all([allyTP, allyMR, allyHS, allyHC]). then(values=>{
        console.log(records);
        let total = values.reduce((sum, value)=>{
          return sum+=value;
        })
        setAllyTotal(total);
        setAllyRecords(records);
      })

      setHeroImages("ally");
//********************** ENEMY TEAM PROMISES ***************************//
      let enemyTP = await enemyTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroTier(hero, tier);
        enemyRecords.ATP.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let enemyMR = await enemyTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroMapRole(hero, mapRole, mapType, point);
        enemyRecords.AMR.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let enemyHS = await enemyTeam.reduce(async (acc, hero, currentIndex)=>{
        let tp = await getHeroSynergy(hero, "enemy", myTeam, enemyTeam, currentIndex);
        enemyRecords.AHS.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      let enemyHC = await enemyTeam.reduce(async (acc, hero)=>{
        let tp = await getHeroCounter(hero, "enemy", myTeam, enemyTeam);
        enemyRecords.AHC.push(tp);
        let a = await acc;
        return a+=tp;
      },0)

      Promise.all([enemyTP, enemyMR, enemyHS, enemyHC]). then(values=>{
        console.log(enemyRecords);
        let total = values.reduce((sum, value)=>{
          return sum+=value;
        })
        setEnemyTotal(total);
      })
      setHeroImages("enemy");
      setEnemyRecords(enemyRecords);
    }else{
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Missing fields.",
          description: "Please make sure all fields are correctly selected and filled.",
          status: "error",
          position: "top",
          variant: "subtle",
          duration: 4000,
          isClosable: true,
        })
      }
    }
  }

  return (
      <div className="background1" style={{color:"#415170",borderBottom:"1px solid",borderBottomColor:"gray.200",minHeight:"273vh",padding:"0 2rem"}}>

        <Image src={logo} className="center-image"/>
        <Text className="game-font center-text" fontSize="4xl">WEB VERSION</Text>
        <Flex pt="14rem" wrap="wrap" direction="column" align="center" justify="center">
            <Tabs defaultIndex={0}>
                <TabList borderColor="transparent" bg="#1b304b" w="80vw" color="white" opacity="0.7">
                  <Tab className="web-button" fontSize="3xl">MAIN</Tab>
                  <Tab className="web-button" fontSize="3xl">RESULT</Tab>
                  <Tab className="web-button" fontSize="3xl">RECOMMENDATION</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Container mt={10} maxW="100%">
                    {/***************************** SELECT TIER ******************************/}
                    <SelectTier tier={tier} setTier={setTier}/>
                    {/***************************** SELECT MAP ******************************/}
                    <SelectMap map={map} setMap={setMap}/>
                    {/***************************** SELECT MAP POINT (Depend on MAP) ******************************/}
                    <Flex wrap="wrap" mt={2}>
                      <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
                      <Text px={5} py={2} fontWeight="700" fontSize="xl">MAP POINT</Text>
                      </Box>
                      <Menu>
                        <MenuButton as={Button} mx={1} className="menu-btn" rightIcon={<BiChevronDown/>}>
                          {point}
                        </MenuButton>
                        <MenuList className="menu-list">
                          {points.length===0?<MenuItem className="menu-item" value="None"onClick={(e)=>{setPoint(e.target.value)}}>SELECT A MAP FIRST</MenuItem>:
                          points.map((item, index)=>{
                            return(
                              <MenuItem className="menu-item" key={index}value={item}onClick={(e)=>{setPoint(e.target.value)}}>{item}</MenuItem>
                            )
                          })
                          } 
                      </MenuList>
                      </Menu>

                    </Flex>
                    {/***************************** SELECT MAP ROLE (Depend on MAP) ******************************/}
                    <Flex wrap="wrap" mt={2}>
                      <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
                      <Text px={5} py={2} fontWeight="700" fontSize="xl">MAP ROLE</Text>
                      </Box>
                      <Menu>
                        <MenuButton as={Button} mx={1} className="menu-btn" rightIcon={<BiChevronDown/>}>
                          {mapRole}
                        </MenuButton>
                        <MenuList className="menu-list">
                      {mapRoles.length===0?<MenuItem className="menu-item" value="None">SELECT A MAP FIRST</MenuItem>:
                      mapRoles.map((item, index)=>{
                        return(
                          <MenuItem className="menu-item" key={index} value={item}
                          onClick={(e)=>{setMapRole(e.target.value)}}>{item}</MenuItem>
                        )
                      })
                      }
                      </MenuList>
                      </Menu>
                    </Flex>
                    {/***************************** YOUR TEAM *********************************************/}
                    <Flex wrap="wrap" mt={2}>
                      <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
                      <Text px={5} py={2} fontWeight="700" fontSize="xl">YOUR TEAM</Text>
                      </Box>
                      <Flex w="30vw" direction="column">

                      {[0,1,2,3,4,5].map((index)=>{
                        return <SelectHero group={myTeam} index={index} setTeam={setMyTeam}/>
                      })}
                    
                      </Flex>
                    </Flex>
                    {/***************************** ENEMY TEAM *********************************************/}
                    <Flex wrap="wrap" mt={2}>
                      <Box bg="#1b304b" w="45vw" mx={1} color="white" opacity="0.5">
                      <Text px={5} py={2} fontWeight="700" fontSize="xl">ENEMY TEAM</Text>
                      </Box>
                      <Flex w="30vw" direction="column">
                        {[0,1,2,3,4,5].map((index)=>{
                        return <SelectHero group={enemyTeam} index={index} setTeam={setEnemyTeam}/>
                      })}
                      </Flex>
                    </Flex>
                    {/*******************************FOOTER BUTTONS**************************/}
                    <Flex mt={8} maxW="500px" wrap="wrap" justify="space-between">
                      <Flex align="center">
                          <Button onClick={()=>{
                            reset();
                          }} className="footer-btn" mx={1}>Backspace</Button>
                          <Text className="footer-text"  ml={1}>Reset</Text>
                      </Flex>
                      <Flex align="center">
                      <Button onClick={calculatePoints} className="footer-btn" mx={1}>Enter</Button>
                          <Text className="footer-text" ml={1}>Recommend</Text>
                      </Flex>
                          
                    </Flex>
                  </Container>
                  </TabPanel>
                  <TabPanel>
                    <Flex justify="space-around">
                      <Flex direction="column" justify="center" align="center">
                        <Text fontSize="5xl" color="white" className="game-font">Your Team</Text>
                        <Text fontSize="6xl" className="game-font">{totalAllyPoints}</Text>
                      </Flex>
                      <Flex direction="column" justify="center" align="center">
                        <Text fontSize="5xl" color="white" className="game-font">Enemy Team</Text>
                        <Text fontSize="6xl" className="game-font">{totalEnemyPoints}</Text>
                      </Flex>
                    </Flex>
                    <Flex justify="center">
                    <Accordion allowToggle w="75vw" maxW="75vw" mt={4}>
                    <AccordionItem>
                      <h2>
                        <AccordionButton _hover={{opacity:1}} _expanded={{ bg: "rgb(38, 160, 216)", color: "white" }} bg="rgb(65, 81, 112)" color="white" opacity="0.8" >
                          <Box flex="1" textAlign="left">
                            RESULTS BREAKDOWN
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2> 
                      <AccordionPanel pb={4} bg="rgba(255, 255, 255, 0.6)">
                      {/***********************************ALLY TEAM STATS*******************************/}
                      <Text fontSize="5xl"className="game-font">Your Team</Text>
                      <ResultBreakdown img={teamImages} records={allyRecords} totalPoints = {totalAllyPoints}/>

                      {/***********************************ENEMY TEAM STATS*******************************/}
                      <Text fontSize="5xl"className="game-font">Enemy Team</Text>
                      <ResultBreakdown img={enemyImages} records={enemyRecords} totalPoints = {totalEnemyPoints}/>
                      </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                  <Flex py={4} justify="space-around" w="100%">
                    <Flex direction="column" w="15%" opacity={0.7}>
                        <svg viewBox="0 0 207.3 238.6">
                      <g>
                        <path d="M202.78,56.81h0c-3-2.28-86.39-50-90.13-52.27S106.16.3,103.65,0c-2.16,0-4,1.51-9,4.54-3.74,2.28-87.14,50-90.13,52.27C.28,59.81,0,59.81,0,65.9V170.43c0,7.77,1.52,9.09,4.51,11.36s86.39,50,90.13,52.27,6.51,4.26,9,4.54c2.16,0,4-1.51,9-4.54,3.74-2.28,87.14-50,90.13-52.27s4.51-3.59,4.51-11.36V65.9C207.29,59.84,207,59.9,202.78,56.81Zm.45,111.86c0,7.52-1.46,8.8-4.33,11s-83,48.29-86.59,50.49c-4.78,2.92-6.59,4.39-8.66,4.39-2.41-.28-5.07-2.19-8.66-4.39S11.27,181.9,8.4,179.67s-4.33-3.5-4.33-11v-101c0-5.86.26-5.81,4.33-8.74,2.87-2.2,83-48.26,86.6-50.46,4.78-2.92,6.58-4.39,8.66-4.39,2.4.28,5.07,2.19,8.66,4.39S196,56.73,198.91,58.93c4.07,2.93,4.32,2.88,4.32,8.74Z" transform="translate(-0.01 0)" fill="##1b304b"></path>
                        <path d="M193.07,63.15c-2.69-2-77.91-44.77-81.28-46.82s-5.87-3.83-8.14-4c-2,0-3.65,1.36-8.13,4.08-3.38,2-78.6,44.77-81.3,46.82-3.82,2.73-4.07,2.57-4.07,8v93.92c0,7,1.37,8.17,4.07,10.21s77.92,44.92,81.29,47,5.87,3.83,8.13,4.08c2,0,3.64-1.36,8.13-4.08,3.37-2.05,78.6-44.92,81.29-47s4.07-3.22,4.07-10.21V71.17C197.14,65.72,196.9,65.88,193.07,63.15ZM138.71,105l-.06,0v16.67a8.61,8.61,0,0,1-1.08,4.3,103.06,103.06,0,0,1-31.78,35.65,3.29,3.29,0,0,1-4.39,0,103.22,103.22,0,0,1-31.55-35.21,9.81,9.81,0,0,1-1.2-5c0-10.51.25-21,0-31.54-.2-7.59,5.85-8.75,11-10,8.78-2.18,16.79-3.83,25.72-3.9,8.32,0,20.76,2.91,25.34,4.31,3.44,1,7.4,2.55,7.75,6,.3,2.9.22,5.85.25,8.77Z" transform="translate(-0.01 0)" fill="#1b304b"></path>
                      </g>
                      </svg>
                      <Text align="center" py={1} fontWeight="500" fontSize="2xl" color="#1b304b">TANK</Text>
                    </Flex>
                    <Flex direction="column" w="15%" opacity={0.7}>
                      <svg viewBox="0 0 207.3 238.6">
                      <g>
                        <path d="M202.78,56.81h0c-3-2.28-86.39-50-90.13-52.27S106.16.3,103.65,0c-2.16,0-4,1.51-9,4.54-3.74,2.28-87.14,50-90.13,52.27C.28,59.81,0,59.81,0,65.9V170.43c0,7.77,1.52,9.09,4.51,11.36s86.39,50,90.13,52.27,6.51,4.26,9,4.54c2.16,0,4-1.51,9-4.54,3.74-2.28,87.14-50,90.13-52.27s4.51-3.59,4.51-11.36V65.9C207.29,59.84,207,59.9,202.78,56.81Zm.45,111.86c0,7.52-1.46,8.8-4.33,11s-83,48.29-86.59,50.49c-4.78,2.92-6.59,4.39-8.66,4.39-2.41-.28-5.07-2.19-8.66-4.39S11.27,181.9,8.4,179.67s-4.33-3.5-4.33-11v-101c0-5.86.26-5.81,4.33-8.74,2.87-2.2,83-48.26,86.6-50.46,4.78-2.92,6.58-4.39,8.66-4.39,2.4.28,5.07,2.19,8.66,4.39S196,56.73,198.91,58.93c4.07,2.93,4.32,2.88,4.32,8.74Z" transform="translate(-0.01 0)" fill="#1b304b"></path>
                        <path d="M193.07,63.15c-2.69-2-77.91-44.77-81.28-46.82s-5.87-3.83-8.14-4c-2,0-3.65,1.36-8.13,4.08-3.38,2-78.6,44.77-81.3,46.82-3.82,2.73-4.07,2.57-4.07,8v93.92c0,7,1.37,8.17,4.07,10.21s77.92,44.92,81.29,47,5.87,3.83,8.13,4.08c2,0,3.64-1.36,8.13-4.08,3.37-2.05,78.6-44.92,81.29-47s4.07-3.22,4.07-10.21V71.17C197.14,65.72,196.9,65.88,193.07,63.15ZM95,97.34a17.81,17.81,0,0,1,0-1.79c1.27-11.67,8.62-15.25,8.62-15.25s7.35,3.56,8.62,15.21a17.81,17.81,0,0,1,0,1.79v44.84H95Zm-25.38,0V95.53C71,83.86,78.3,80.3,78.3,80.3s7.35,3.56,8.62,15.21a17.81,17.81,0,0,1,0,1.79l0,44.82H69.65Zm17.29,61H69.67v-9.53H86.94Zm25.35,0H95v-9.53h17.27Zm25.36,0H120.38v-9.53h17.27Zm0-61v44.84H120.38V95.55C121.66,83.88,129,80.3,129,80.3s7.35,3.56,8.65,15.21C137.7,96,137.65,97.3,137.65,97.3Z" transform="translate(-0.01 0)" fill="#1b304b"></path>
                      </g>
                      </svg>
                      <Text align="center" py={1} fontWeight="500" fontSize="2xl" color="#1b304b">DAMAGE</Text>
                    </Flex>
                    <Flex direction="column" w="15%" opacity={0.7}>
                    <svg viewBox="0 0 207.3 238.6">
                        <g>
                        <path d="M202.78,56.81h0c-3-2.28-86.39-50-90.13-52.27S106.16.3,103.65,0c-2.16,0-4,1.51-9,4.54-3.74,2.28-87.14,50-90.13,52.27C.28,59.81,0,59.81,0,65.9V170.43c0,7.77,1.52,9.09,4.51,11.36s86.39,50,90.13,52.27,6.51,4.26,9,4.54c2.16,0,4-1.51,9-4.54,3.74-2.28,87.14-50,90.13-52.27s4.51-3.59,4.51-11.36V65.9C207.29,59.84,207,59.9,202.78,56.81Zm.45,111.86c0,7.52-1.46,8.8-4.33,11s-83,48.29-86.59,50.49c-4.78,2.92-6.59,4.39-8.66,4.39-2.41-.28-5.07-2.19-8.66-4.39S11.27,181.9,8.4,179.67s-4.33-3.5-4.33-11v-101c0-5.86.26-5.81,4.33-8.74,2.87-2.2,83-48.26,86.6-50.46,4.78-2.92,6.58-4.39,8.66-4.39,2.4.28,5.07,2.19,8.66,4.39S196,56.73,198.91,58.93c4.07,2.93,4.32,2.88,4.32,8.74Z" transform="translate(-0.01 0)" fill="#1b304b"></path>
                        <path d="M193.07,63.15c-2.69-2-77.91-44.77-81.28-46.82s-5.87-3.83-8.14-4c-2,0-3.65,1.36-8.13,4.08-3.38,2-78.6,44.77-81.3,46.82-3.82,2.73-4.07,2.57-4.07,8v93.92c0,7,1.37,8.17,4.07,10.21s77.92,44.92,81.29,47,5.87,3.83,8.13,4.08c2,0,3.64-1.36,8.13-4.08,3.37-2.05,78.6-44.92,81.29-47s4.07-3.22,4.07-10.21V71.17C197.14,65.72,196.9,65.88,193.07,63.15Zm-46.56,64.56a7.26,7.26,0,0,1-7.26,7.26h-20v20a7.26,7.26,0,0,1-7.26,7.26H95.17A7.26,7.26,0,0,1,87.91,155V135h-20a7.26,7.26,0,0,1-7.26-7.26v-17A7.26,7.26,0,0,1,68,103.56H88v-20a7.26,7.26,0,0,1,7.26-7.26h16.92a7.26,7.26,0,0,1,7.19,7.33v20h20a7.26,7.26,0,0,1,7.16,7.26Z" transform="translate(-0.01 0)" fill="#1b304b"></path>
                        </g>
                    </svg>
                    <Text align="center" py={1} fontWeight="500" fontSize="2xl" color="#1b304b">SUPPORT</Text>
                    </Flex>
                    
                  </Flex>
                  <Grid bg="rgba(255, 255, 255, 0.5)" alignItems="center" justifyItems="center" templateColumns="repeat(6, 1fr)" gap={0}>
                        <GridItem rowStart={1} colStart={1}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Heros</Text>
                        </GridItem>
                        <GridItem rowStart={1} colStart={2}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Points</Text>
                        </GridItem>
                        <GridItem rowStart={1} colStart={3}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Heros</Text>
                        </GridItem>
                        <GridItem rowStart={1} colStart={4}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Points</Text>
                        </GridItem>
                        <GridItem rowStart={1} colStart={5}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Heros</Text>
                        </GridItem>
                        <GridItem rowStart={1} colStart={6}>
                          <Text align="center" className="text" px={9} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Points</Text>
                        </GridItem>

                        {!!recommendation? Object.entries(recommendation.Tank)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={1}>
                              <Image mt={2} objectFit="cover" h="100px" w="120px" key={index} src={allImages[key]}/>
                              </GridItem>
                            )
                          }):null
                         }
                        
                         {!!recommendation? Object.entries(recommendation.Tank)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={2}>
                              <Text className="game-font" fontSize="5xl" key={index}>{val}</Text>
                              </GridItem>
                            )
                          }):null
                         }
                         
                         {!!recommendation? Object.entries(recommendation.DPS)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={3}>
                              <Image mt={2} objectFit="cover" h="100px" w="120px" key={index} src={allImages[key]}/>
                              </GridItem>
                            )
                          }):null
                         }
                         {!!recommendation? Object.entries(recommendation.DPS)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={4}>
                              <Text className="game-font" fontSize="5xl" key={index}>{val}</Text>
                              </GridItem>
                            )
                          }):null
                         }
                          {!!recommendation? Object.entries(recommendation.Support)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={5}>
                              <Image mt={2} objectFit="cover" h="100px" w="120px" key={index} src={allImages[key]}/>
                              </GridItem>
                            )
                          }):null
                         }
                         {!!recommendation? Object.entries(recommendation.Support)
                          .map(([key, val], index) => {
                            return (
                              <GridItem rowStart={index+2} colStart={6}>
                              <Text className="game-font" fontSize="5xl" key={index}>{val}</Text>
                              </GridItem>
                            )
                          }):null
                         }

                  </Grid>
                 
                  </TabPanel>

                </TabPanels>
            </Tabs>
          
         
        </Flex>
    </div>
  );
}

export default Web;
