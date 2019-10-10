import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Faith from './images/Faith.png';
import Hope from './images/Hope.png';
import Charity from './images/Charity.png';

import Diligence from './images/Diligence.png';
import Patience from './images/Patience.png';
import Virtue from './images/Virtue.png';

import Grit from './images/Grit.png';
import Humility from './images/Humility.png';
import Integrity from './images/Integrity.png';


class Spiritual extends React.Component {
  render() {
    return (
      <div className="App" style={{ paddingTop:60, }}>

        <body style={{ margin:16, }}>

        <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Spiritual" >
          <FavoriteIcon /></Link>
      </Breadcrumbs>

          <h1>Spiritual Awesomeness</h1> 
          
          <List>
            <ListItem button component="a" href= './Faith'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Faith}/></ListItemAvatar>
              <ListItemText>Faith</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './Hope'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Hope" src={Hope} /></ListItemAvatar>
              <ListItemText>Hope</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Charity'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }} alt="Charity" src={Charity} /></ListItemAvatar>
              <ListItemText>Charity</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './Diligence'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Diligence} /></ListItemAvatar>
              <ListItemText>Diligence</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Humility'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Humility} /></ListItemAvatar>
              <ListItemText>Humility</ListItemText> 
            </ListItem>
           
            <ListItem button component="a" href= './Patience'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Patience} /></ListItemAvatar>
              <ListItemText>Patience</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Virtue'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Virtue} /></ListItemAvatar>
              <ListItemText>Virtue</ListItemText> 
           </ListItem>

            <ListItem button component="a" href= './Integrity'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Integrity} /></ListItemAvatar>
              <ListItemText>Integrity</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Grit'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Faith" src={Grit} /></ListItemAvatar>
              <ListItemText>Grit</ListItemText> 
           </ListItem>
        
        </List>
        
        </body>
      </div>
    );
  }
}
export default Spiritual;
