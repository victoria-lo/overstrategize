import '../App.css';
import { Box, Container, Text, Image, Flex } from "@chakra-ui/react"
import soldier from '../img/soldier76.png'

function About({forwardedRef}) {

  return (
      <Container ref={forwardedRef} className="background2" color="gray.600" mt={10} py={10} borderBottom="1px solid" borderBottomColor="gray.200" maxW="100%" px={10}>
        <Flex wrap="wrap" justify="space-evenly" align="center">
          <Box maxW="750px" align="left">
            <Text mb={6} className="game-font" fontSize="6xl">About</Text>
            <Text mb={6} className="game-font" fontSize="4xl">Hard Stuck In Your Rank? No problem</Text>
            <Text mb={6} fontSize="xl">Overstrategize is a tool built for Overwatch players by Overwatch players who want to climb the ranks with better 
            strategic hero picks - no cheats, no aimbots.</Text>
            <Text mb={6} className="game-font" fontSize="4xl">We're the man on the mission</Text>
            <Text mb={4} fontSize="xl">Our mission is to help fellow Overwatch players, who are struggling to climb out of their ranks, make 
            better strategic decisions.</Text>
            <Text mb={6} fontSize="xl">Using machine learning technologies, Overstrategize incorporates a real-time object detection algorithms 
            to analyze both the ally and enemy teams, then determine the best hero the player should select based on the current map and hero 
            composition.</Text>
          </Box>
          <Box maxW="550px">
            <Image src={soldier}/>
          </Box>
      </Flex>
    </Container>
  );
}

export default About;
