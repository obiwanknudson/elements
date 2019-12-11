import React from 'react';
import TableColor from './TableColor.png';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import AccessibilityIcon from '@material-ui/icons/Accessibility';
// import SchoolIcon from '@material-ui/icons/School';
// import GroupIcon from '@material-ui/icons/Group';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {earth} from './images/earth.jpg'






class Home extends React.Component {
  
  render() {
  

    return (
      <div className="App" style={{ paddingTop:60, }} align="center">

        <body style={{ margin:20,}}>
          
          
          
          <h1>Be Ye Therefore Awesome</h1> 
          <p style={{ padding:10,margin:10}}>
          Elements of Awesome is an achievement system for teens to set goals and become better versions of themselves.  
        </p>
        <p style={{ padding:10,margin:10}}>
         The system breaks down character attributes into four pillars:
        </p>
          
        
            <Grid container spacing={4}>
        <Grid item xs> 
          <Card style={{ display: 'flex', maxWidth: 345, margin:10, padding:10}}  >
            <CardActionArea href= '/elements/Physical'>
                <CardMedia 
                height="140"
                image={earth}
                title="Earth"/>
                <CardContent>
                <h1>Earth</h1>
                <h3>(Physical)</h3>
                </CardContent>
            </CardActionArea>
            </Card>
</Grid>
<Grid item xs> 
            <Card style={{ maxWidth: 345,margin:10, padding:10}}>
            <CardActionArea href= '/elements/Spiritual'>
                <CardMedia/>
                <CardContent>
                <h1>Fire</h1>
                <h3>(Spiritual)</h3>
                </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
<Grid item xs> 
            <Card style={{ maxWidth: 345, margin:10, padding:10}}>
            <CardActionArea href= '/elements/Mental'>
                <CardMedia/>
                <CardContent>
                    <h1>Air</h1>
                    <h3>(Mental)</h3>
                </CardContent>
            </CardActionArea  >
            </Card>
            </Grid>
<Grid item xs> 
            <Card style={{ maxWidth: 345,margin:10, padding:10}}>
            <CardActionArea href= '/elements/Social'>
                <CardMedia/>
                <CardContent>
                     <h1>Water</h1>
                     <h3>(Social)</h3>
                </CardContent>
            </CardActionArea>
            </Card>  
            </Grid>
        </Grid> 

         <p style={{ padding:10,margin:10}}>
         Within each pillare there are 9 principles.  Each principle as a series of requirements to complete to rank up.
        </p>   
        <Grid container spacing={3}>
        <Grid item xs>       
          <img alt='Table of Elements' src={TableColor} style={{paddingTop:80,width:400}}/>
          
        </Grid>
        </Grid>
        <Card style={{ display: 'flex', Width: 100, margin:10, padding:10}}  >
            <CardActionArea href= '/Pages/signup'>
                <CardMedia/>
                <CardContent>
                <h1>Sign Up</h1>
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{  display: 'flex',Width: 50, margin:10, padding:10}}  >
            <CardActionArea href= 'https://www.amazon.com/dp/1699871310/ref=cm_sw_em_r_mt_dp_U_a0SZDbXW3MYBR'>
                <CardMedia/>
                <CardContent>
                <h1>Get the Guidebook</h1>
                </CardContent>
            </CardActionArea>
            </Card>
        </body>
      </div>
    );
  }
}
export default Home;
