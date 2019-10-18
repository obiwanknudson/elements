import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Group';

import Leadership from './images/Leadership.png';
import Courage from './images/Courage.png';
import Confidence from './images/Confidence.png';

import Music from './images/Music.png';
import Art from './images/Art.png';
import Culture from './images/Culture.png';

import Empathy from './images/Empathy.png';
import Responsability from './images/Responsability.png';
import Enthusiasm from './images/Enthusiasm.png';


class Social extends React.Component {
  render() {
    return (
      <div className="App" style={{ paddingTop:60, }}>

        <body style={{ margin:16, }}>
        <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Social" >
          <ShareIcon /> </Link>
      </Breadcrumbs>
          <h1>Social Awesomeness</h1> 
          <List>
            
            <ListItem button component="a" href= './social/Confidence'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Confidence" src={Confidence} /></ListItemAvatar>
              <ListItemText>Confidence</ListItemText> 
           </ListItem>

           <ListItem button component="a" href= './Leadership'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Leadership}/></ListItemAvatar>
              <ListItemText>Leadership</ListItemText> 
            </ListItem>

           <ListItem button component="a" href= './Courage'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }} alt="Courage" src={Courage} /></ListItemAvatar>
              <ListItemText>Courage</ListItemText> 
            </ListItem>
            
           
           <ListItem button component="a" href= './Empathy'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Empathy" src={Empathy} /></ListItemAvatar>
              <ListItemText>Empathy</ListItemText> 
           </ListItem>

            <ListItem button component="a" href= './Enthusiasm'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Enthusiasm" src={Enthusiasm} /></ListItemAvatar>
              <ListItemText>Enthusiasm</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Responsabiliy'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Responsability" src={Responsability} /></ListItemAvatar>
              <ListItemText>Responsability</ListItemText> 
           </ListItem>
        
            <ListItem button component="a" href= './Art'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Art" src={Art} /></ListItemAvatar>
              <ListItemText>Art</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Music'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Music" src={Music} /></ListItemAvatar>
              <ListItemText>Music</ListItemText> 
            </ListItem>
           
            <ListItem button component="a" href= './Culture'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="Culture" src={Culture} /></ListItemAvatar>
              <ListItemText>Culture</ListItemText> 
            </ListItem>
        </List>
        </body>
      </div>
    );
  }
}
export default Social;
