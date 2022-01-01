import '../App.css';
import React, { useRef } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Use from './Use';
import Donate from './Donate';
import Disclaimer from './Disclaimer';
import Web from './Web';
import Docs from './Docs';

function Home({about, nav, use, donate,disclaimer}){

  return(
    <div>
      <Header/>
      <About forwardedRef={about}/>
      <Use forwardedRef={use} disclaimerRef={disclaimer}/>
      <Donate forwardedRef={donate}/>
      <Disclaimer navRef={nav} forwardedRef={disclaimer}/>
    </div>
  )
}
function App() {
  const nav = useRef(null);
  const about = useRef(null);
  const use = useRef(null);
  const donate = useRef(null);
  const disclaimer = useRef(null);
  
  return (
    <Router>
    <div className="App">
    <Nav forwardedRef={nav} aboutRef={about} usageRef={use} donateRef={donate} disclaimerRef={disclaimer}/>
      
    </div>
    <Switch>
      <Route exact path={["/", "/#about", "/#how-to-use", "/#donate" ,"/#disclaimer"]}>
        <Home nav={nav} about={about} use={use} donate={donate} disclaimer={disclaimer}/>
      </Route>
      <Route exact path="/web">
        <Web />
      </Route>
      <Route exact path="/docs">
        <Docs />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
