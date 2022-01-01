import '../App.css';
import { Box, Container, Text, Button, Flex , Icon } from "@chakra-ui/react"
import { BiDesktop, BiDownload ,BiErrorCircle, BiFile} from "react-icons/bi";
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Use({forwardedRef,disclaimerRef}) {
  const [component, setComponent] = useState();

  const handleScroll = () =>{
    if(component !== undefined){
      window.scrollTo({
        top: component.offsetTop,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(()=>{
    if(component !== undefined){
      window.scrollTo({
        top: component.offsetTop,
        left: 0,
        behavior: "smooth"
      });
    }
  },[component])

  const download = () =>{
    window.open("https://storage.googleapis.com/overstrategize-viclo/Overstrategize-master.zip");
  }

  return (
      <Container ref={forwardedRef} className="background1" pt={10} pb="120px" borderBottom="1px solid" borderBottomColor="gray.200" maxW="100%" px={10}>
        <Flex direction="column" wrap="wrap" justify="center" align="center">
          <Box maxW="900px" align="center">
            <Text mb={6} mt={4} className="game-font shadow" color="white" fontSize="6xl">How to use</Text>
            <Text mb={6} fontSize="xl" color="gray.700">There are 2 ways in which you can use Overstrategize - web or desktop.</Text>
            <Text mb={6} fontSize="xl" color="gray.700">The web version is a simple strategic hero picker integrated with our custom
            Overstrategize API. You will need to input the map name, type and hero compositions manually on the browser.</Text>
            <Text mb={6} fontSize="xl" color="gray.700">On the other hand, downloading the tool on your desktop will provide you will real-time strategic
            hero picks using a custom object detection program and the aforementioned in-house API.</Text>
            <Text my={6} pt={6} fontSize="2xl" fontWeight="700" color="#404863">CHOOSE YOUR NEXT ACTION</Text>
          </Box>
          <Flex justify="center" align="center" wrap="wrap">
             <Box _hover={{border:"2px", borderColor: "white", transform:"scale(1.2)"}} transition="transform 0.3s" mt={4} mx={3} w="200px" h="120px"bgColor="#E4E2E8" border="1.2px solid #404863">
              <Link to="/#disclaimer" onClick={()=>{setComponent(disclaimerRef.current); handleScroll()}}><Button className="select" w="100%" h="100%" bgColor="#E4E2E8" color="#404863">
                    <Icon w="60%" h="60%" as={BiErrorCircle}/>
                    <Text fontSize="md" mt={3}>DISCLAIMER</Text>
                </Button></Link>
              </Box>
              <Box _hover={{border:"2px", borderColor: "white", transform:"scale(1.2)"}} transition="transform 0.3s" mt={4} mx={3} w="200px" h="120px"bgColor="#E4E2E8" border="1.2px solid #404863">
              <Link to="/web"><Button className="select" w="100%" h="100%" bgColor="#E4E2E8" color="#404863">
                    <Icon w="60%" h="60%" as={BiDesktop}/>
                    <Text fontSize="md" mt={3}>WEB</Text>
                </Button></Link>
              </Box>
              <Box _hover={{border:"2px", borderColor: "white", transform:"scale(1.2)"}} transition="transform 0.3s" mt={4} mx={3} w="200px" h="120px"bgColor="#E4E2E8" border="1.2px solid #404863">
                <Button onClick={download} className="select" w="100%" h="100%" bgColor="#E4E2E8" color="#404863">
                    <Icon w="60%" h="60%" as={BiDownload}/>
                    <Text fontSize="md" mt={3}>DESKTOP</Text>
                </Button>
              </Box>
              <Box _hover={{border:"2px", borderColor: "white", transform:"scale(1.2)"}} transition="transform 0.3s" mt={4} mx={3} w="200px" h="120px"bgColor="#E4E2E8" border="1.2px solid #404863">
              <Button onClick={()=>{window.location.href="https://github.com/victoria-lo/overstrategize"}} className="select" w="100%" h="100%" bgColor="#E4E2E8" color="#404863">
                    <Icon w="60%" h="60%" as={BiFile}/>
                    <Text fontSize="md" mt={3}>DOCUMENTATION</Text>
                </Button>
              </Box>
          </Flex>
      </Flex>
    </Container>
  );
}

export default Use;
