import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import AppDrawer from './components/AppDrawer';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/Profile';
import config from './config/firebase';

// import firebaseApp from './config/firebase';
import 'firebase/firestore';
import * as firebase from 'firebase/app';


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

// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import config from './config/firebase';

// const firebaseApp = firebase.initializeApp(config);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };


class ElementsApp extends React.Component {
  constructor(props){
    super(props);
    firebase.initializeApp(config);
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

    this.state = {
      developers: [],
      
    }
  }
  
  

  writeUserData = () => {
    firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }


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
             <div className="App">
    <header className="App-header">
      
    </header>
  </div>
             
              </div>         
          </Router>
        </div>

        
      );
      
    }
}
  export default ElementsApp;
  

