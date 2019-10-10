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

import Strength from './elements/principles/Strength';
// import Agility from './elements/Agility';
// import Dexterity from './elements/Dexterity';
// import Appearance from './elements/Appearance';
// import Poise from './elements/Poise';
// import FirstAid from './elements/FirstAid';
// import Survival from './elements/Survival';
// import Nutrition from './elements/Nutrition';

import Faith from './elements/principles/Faith';

import Math from './elements/principles/Math';

import Confidence from './elements/principles/Confidence';


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
               
                <Route exact path="/elements/Strength" component={Strength} />
                <Route exact path="/elements/Faith" component={Faith} />
                <Route exact path="/elements/Math" component={Math} />
                <Route exact path="/elements/Confidence" component={Confidence} />
             
             
              </div>         
          </Router>
        </div>

        
      );
      
    }
}
  export default ElementsApp
