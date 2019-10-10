import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';

import Math from './images/Math.png';
import Science from './images/Science.png';
import Language from './images/Language.png';

import Finance from './images/Finance.png';
import Engineering from './images/Engineering.png';
import History from './images/History.png';

import Technology from './images/Technology.png';
import Civics from './images/Civics.png';
import Geography from './images/Geography.png';


class Mental extends React.Component {
  render() {
    return (
      <div className="App" style={{ paddingTop:60, }}>

        <body style={{ margin:16, }}>
        <Breadcrumbs>
        <Link href="/Pages/Home"><HomeIcon /></Link>
        <Link href="./Mental" >
          <SchoolIcon /></Link>
        
      </Breadcrumbs>

          <h1>Mental Awesomeness</h1> 

          <List>
            <ListItem button component="a" href= './Math'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Math}/></ListItemAvatar>
              <ListItemText>Math</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './Science'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="science" src={Science} /></ListItemAvatar>
              <ListItemText>Science</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Engineering'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }} alt="engineering" src={Engineering} /></ListItemAvatar>
              <ListItemText>Engineering</ListItemText> 
            </ListItem>
            
            <ListItem button component="a" href= './Technology'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Technology} /></ListItemAvatar>
              <ListItemText>Technology</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Finance'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Finance} /></ListItemAvatar>
              <ListItemText>Finance</ListItemText> 
            </ListItem>
           
            <ListItem button component="a" href= './History'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={History} /></ListItemAvatar>
              <ListItemText>History</ListItemText> 
            </ListItem>
           
           <ListItem button component="a" href= './Language'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Language} /></ListItemAvatar>
              <ListItemText>Language</ListItemText> 
           </ListItem>

            <ListItem button component="a" href= './Civics'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Civics} /></ListItemAvatar>
              <ListItemText>Civics</ListItemText> 
           </ListItem>
           
           <ListItem button component="a" href= './Geography'>
              <ListItemAvatar><Avatar style={{ borderRadius: 0 }}alt="math" src={Geography} /></ListItemAvatar>
              <ListItemText>Geography</ListItemText> 
           </ListItem>
        
        </List>
        </body>
      </div>
    );
  }
}
export default Mental;
