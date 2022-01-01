import { Flex,
    Text,
    Grid,
    GridItem,
    Image,
  } from "@chakra-ui/react";
  import '../App.css';


export default function ResultBreakdown({img, records, totalPoints}){
    return(
      <>
      <Flex w="100%">
      <Text w="20%" align="center" className="text" px={5} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Heros</Text>
      <Text w="20%" align="center" className="text" px={5} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Tier Points</Text>
      <Text w="20%" align="center" className="text" px={5} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Map Points</Text>
      <Text w="20%" align="center" className="text" px={5} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Hero Synergy</Text>
      <Text w="20%" align="center" className="text" px={5} py={1} bg="rgba(27, 48, 75,0.5)" color="white" fontSize="5xl">Hero Counter</Text>
      </Flex>
      <Grid alignItems="center" justifyItems="center" templateColumns="repeat(5, 1fr)" templateRows="repeat(6, 1fr)">
      {img.length>0? img.map((url, index)=>{
            return (
              <GridItem rowStart={index+1} colStart={1}>
              <Image mt={2} objectFit="cover" h="100px" w="120px" key={index} src={url.toString()}/>
              </GridItem>
            )
          }):null}
      {records.ATP.length>0? records.ATP.map((tp, index)=>{
            return (
              <GridItem rowStart={index+1} colStart={2}>
              <Text className="game-font" fontSize="5xl" key={index}>{tp}</Text>
              </GridItem>
            )
          }):null}

      {records.AMR.length>0? records.AMR.map((tp, index)=>{
            return (
              <GridItem rowStart={index+1} colStart={3}>
              <Text className="game-font" fontSize="5xl" key={index}>{tp}</Text>
              </GridItem>
            )
          }):null}
          {records.AHS.length>0? records.AHS.map((tp, index)=>{
            return (
              <GridItem rowStart={index+1} colStart={4}>
              <Text className="game-font" fontSize="5xl" key={index}>{tp}</Text>
              </GridItem>
            )
          }):null}
          {records.AHC.length>0? records.AHC.map((tp, index)=>{
            return (
              <GridItem rowStart={index+1} colStart={5}>
              <Text className="game-font" fontSize="5xl" key={index}>{tp}</Text>
              </GridItem>
            )
          }):null}
      </Grid>
      <Flex my={4} width="100%" justify="center"><Text align="center" px={10} w="100%" className="game-font ticker" color="white" fontSize="4xl">Total {totalPoints}</Text></Flex>
      </>
    )
}