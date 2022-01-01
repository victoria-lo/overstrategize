import '../App.css';
import { Image, Button, Center, Wrap, WrapItem  } from "@chakra-ui/react";
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

function Header() {

  const download = () =>{
    window.open("https://storage.googleapis.com/overstrategize-viclo/Overstrategize-master.zip");
  }
  
  return (
    <div style={{textAlign:"center"}}>
      <div className="banner">
        <video autoPlay muted loop>
        <source src="https://static.playoverwatch.com/video/pages/home/header-703354f97f.mp4" type="video/mp4"/>
        </video>
        <Center pos="absolute" top="25%" w="100%" px={4}>
          <Image src={logo}/>
        </Center>
          <Center pos="absolute" top="47%" w="100%">
            <Wrap spacing="30px" justify="center">
            <WrapItem>
              <Button _active={{ background:"#eb8d1a"}} _hover={{ background:"#f06414"}} bgColor="#f06414" className="title-btn"><Link to="/web">TRY ON WEB</Link></Button>
              </WrapItem>
              <WrapItem>
              <Button _active={{ background:"#1ea3d4"}} _hover={{ background:"#007dd1"}} bgColor="#007dd1" className="title-btn" onClick={download}>DOWNLOAD</Button>
              </WrapItem>
            </Wrap>
          </Center>
          <div className="trapezoid"></div>
          <div className="trapezoid-right"></div>
      </div>
    </div>
  );
}

export default Header;