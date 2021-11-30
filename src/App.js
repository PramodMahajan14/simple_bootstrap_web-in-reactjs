import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Navbar from "./components/navbar";
const App =()=>{
  
  return(<>
 <Router>
<Navbar/>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" exact component={About}/>
     <Route path="/service"  exact component={Services}/>
     <Route path="/contact"  exact component={Contact}/>
   </Switch>
 </Router>
  </>)
}

export default App;
