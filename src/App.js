import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AppDrawer from './components/AppDrawer';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/Profile';

import Physical from './elements/Physical';
import Spiritual from './elements/Spiritual';
import Mental from './elements/Mental';
import Social from './elements/Social';

import Strength from './elements/physical/Strength';
// import Agility from './elements/Agility';
// import Dexterity from './elements/Dexterity';
// import Appearance from './elements/Appearance';
// import Poise from './elements/Poise';
// import FirstAid from './elements/FirstAid';
// import Survival from './elements/Survival';
// import Nutrition from './elements/Nutrition';

import Faith from './elements/spiritual/Faith';

import Math from './elements/mental/Math';

import Confidence from './elements/social/Confidence';


class ElementsApp extends React.Component {
    render() {

        return (
        <div className="App">
         
         <AppDrawer/>
         
  
          <Router>
              <div className="content">
                <Route exact path="/pages/Home" component={Home} />
                <Route exact path="/pages/Profile" component={Profile} />
                <Route exact path="/pages/Signup" component={Signup} />
                <Route exact path="/pages/Login" component={Login} />


                <Route exact path="/elements/Physical" component={Physical} />
                <Route exact path="/elements/Spiritual" component={Spiritual} />
                <Route exact path="/elements/Mental" component={Mental} />
                <Route exact path="/elements/Social" component={Social} />
               
                <Route exact path="/elements/physical/Strength" component={Strength} />
                <Route exact path="/elements/spiritual/Faith" component={Faith} />
                <Route exact path="/elements/mental/Math" component={Math} />
                <Route exact path="/elements/social/Confidence" component={Confidence} />
             
             
              </div>         
          </Router>
        </div>

        
      );
      
    }
}
  export default ElementsApp
