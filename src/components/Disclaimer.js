import '../App.css';
import { Box, Container, Text, Image, Flex} from "@chakra-ui/react"
import disclaimer from '../img/disclaimer.png'
import {Link} from 'react-router-dom';

function Disclaimer({forwardedRef, navRef}) {

  const backToTop = () =>{
    if(navRef !== undefined){
      window.scrollTo({
        top: navRef,
        left: 0,
        behavior: "smooth"
      });
    }
  };


  return (
      <Container ref={forwardedRef} className="background2" color="gray.600" pb={10} borderBottom="1px solid" borderBottomColor="gray.200" maxW="100%" px={10}>
        <Flex wrap="wrap" direction="column" justify="center" align="top">
        <Box alignSelf="center" maxW="100%">
            <Image src={disclaimer}/>
        </Box>
        <Box align="Center">
          <Text my={6} className="game-font ticker" color="white" fontSize="6xl">Disclaimer</Text>
          <Text mb={6} maxW="1000px" fontSize="xl">Overstrategize DO NOT OWN anything related to Overwatch. This tool is completely free, 
          does not seek to interfere with the original license, and offered for the sole purpose of helping players become better. 
          But in case of request from Blizzard Entertainment Inc., the development of the tool can stop at any time.</Text>
          <Text mb={6} maxW="1000px" fontSize="xl">All logos, images and hero names belong to Blizzard Entertainment Inc.</Text>
          <Text mb={6} maxW="1000px" fontSize="xl">All trademarks, service marks and trade names are the property of Blizzard Entertainment Inc. or its related companies. 
          This project is for free distribution, any attempt to sale or marketing it is strictly prohibited.</Text>
          <Text mb={10} maxW="1000px" fontSize="xl">All materials containing the Overwatch name are the property of Blizzard Entertainment Inc. or its related companies.</Text>
          <Text mb={10} maxW="1000px" fontSize="xl">In the case of bugs, errors or enquiries, please contact the developers at <a className="contact" href="mailto:victoria-lo@hotmail.com">victoria-lo@hotmail.com</a>.</Text>
          <Link className="contact" to="/" onClick={()=>{backToTop()}}>Back To Top</Link>
        </Box>
      </Flex>
    </Container>
  );
}

export default Disclaimer;
