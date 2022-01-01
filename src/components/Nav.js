import '../App.css';
import { Box, Grid} from "@chakra-ui/react";
import {Link, useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Nav({forwardedRef, aboutRef, usageRef, donateRef, disclaimerRef}) {
  const [component, setComponent] = useState();
  const location = useLocation();

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
  
  
  return (
    <div style={{textAlign:"center"}}>
        {location.pathname !== "/web" && location.pathname !== "/docs"?
      <Box ref={forwardedRef}  bg="rgb(11,13,18)" w="100%" p={1} color="gray" h="40px">
      <Grid templateColumns="repeat(6, 1fr)" className="game-font">
        <Link to="/#about" onClick={()=>{setComponent(aboutRef.current); handleScroll()}}>About</Link>
        <Link to="/#how-to-use" onClick={()=>{setComponent(usageRef.current); handleScroll()}}>How To Use</Link>
        <Link to="/#donate" onClick={()=>{setComponent(donateRef.current); handleScroll()}}>Donate</Link>
        <Link to="/#disclaimer" onClick={()=>{setComponent(disclaimerRef.current); handleScroll()}}>Disclaimer</Link>
        <Link onClick={()=>window.open("https://github.com/victoria-lo/overstrategize", "_blank")}>Github</Link>
        <Link to="/docs">Api Docs</Link>
        </Grid>
      </Box>
      :<Box ref={forwardedRef}  bg="rgb(11,13,18)" w="100%" p={1} color="gray" h="40px">
      <Grid templateColumns="repeat(5, 1fr)" className="game-font">
        <Link to="/">Back to Home</Link>
        <Link to="/web">Web Tool</Link>
        <Link to="/download">Download</Link>
        <Link onClick={()=>window.open("https://github.com/victoria-lo/overstrategize", "_blank")}>Github</Link>
        <Link to="/docs">API Docs</Link>
        </Grid>
      </Box>}
    </div>
  )
  
}

export default Nav;