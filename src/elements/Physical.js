import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import Strength from './images/Strength.png';
import Endurance from './images/Endurance.png';
import Agility from './images/Agility.png';

import Dexterity from './images/Dexterity.png';
import Appearance from './images/Appearance.png';
import Poise from './images/Poise.png';

import FirstAid from './images/FirstAid.png';
import Survival from './images/Survival.png';
import Nutrition from './images/Nutrition.png';

class Physical extends React.Component {
  render() {
    return (
      <div className="App" style={{ paddingTop:60, }}>

        <body style={{ margin:16, }}>

        <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Physical" >
          <AccessibilityIcon /> </Link>
      </Breadcrumbs>

          <h1>Physical Awesomeness</h1> 
             
          <List>
            <ListItem button component="a" href= './physical/Strength'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Strength}/></ListItemAvatar>
              <ListItemText>Strength</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './Endurance'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Endurance" src={Endurance} /></ListItemAvatar>
              <ListItemText>Endurance</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Appearance'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }} alt="Appearance" src={Appearance} /></ListItemAvatar>
              <ListItemText>Appearance</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './FirstAid'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={FirstAid} /></ListItemAvatar>
              <ListItemText>FirstAid</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Dexterity'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Dexterity} /></ListItemAvatar>
              <ListItemText>Dexterity</ListItemText> 
            </ListItem>
           
            <ListItem button component="a" href= './Poise'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Poise} /></ListItemAvatar>
              <ListItemText>Poise</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Agility'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Agility} /></ListItemAvatar>
              <ListItemText>Agility</ListItemText> 
           </ListItem>

            <ListItem button component="a" href= './Survival'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Survival} /></ListItemAvatar>
              <ListItemText>Survival</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Nutrition'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Strength" src={Nutrition} /></ListItemAvatar>
              <ListItemText>Nutrition</ListItemText> 
           </ListItem>
        
        </List>

        </body>
      </div>
    );
  }
}
export default Physical;
