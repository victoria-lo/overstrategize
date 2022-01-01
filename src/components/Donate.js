import '../App.css';
import { Box, Container, Text, Image, Flex , Button} from "@chakra-ui/react"
import ashe from '../img/ashe.png'

function Donate({forwardedRef}) {

  return (
      <Container ref={forwardedRef} color="gray.600" mt={10} py={10} borderBottom="1px solid" borderBottomColor="gray.200" maxW="100%" px={10}>
        <Flex wrap="wrap" justify="space-evenly" align="top">
        <Box maxW="450px">
            <Image src={ashe}/>
          </Box>
        <Box maxW="800px" align="Center">
          <Text mb={6} className="game-font ticker" color="white" fontSize="6xl">Donate</Text>
          <Text mb={6} fontSize="xl">Overstrategize is completely free-to-use tool for Overwatch players.</Text>
          <Text mb={6} fontSize="xl">But if you'd like to show some appreciation to our developers, who worked tirelessly in their spare time to build
          this tool, please donate any amount you want.</Text>
          <Text mb={10} fontSize="xl">On behalf of the developers, Ashe says, "Thank you very much!"</Text>
          <Flex wrap="wrap" justify="center">
            <Button onClick={()=>window.open("https://www.buymeacoffee.com/victoria2666", "_blank")} _hover={{ background:"#f06414"}} bgColor="#f06414" mt={4} mx={3} className="title-btn">BUY ME TEA</Button>
            <Button onClick={()=>window.open("https://www.paypal.com/paypalme/victoria2666", "_blank")} _hover={{ background:"#007dd1"}} bgColor="#007dd1" mt={4} mx={3} className="title-btn">PAYPAL ME</Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default Donate;
