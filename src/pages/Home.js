import React from 'react';
import TableColor from './TableColor.png';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';







class Home extends React.Component {
  
  render() {
  

    return (
      <div className="App" style={{ paddingTop:60, }} align="center">

        <body style={{ margin:20,}}>
          
          
          
          <h1>The Elements of Awesome</h1> 
          <Paper style={{ padding:10,margin:20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin ligula vitae congue ultricies. Nullam pharetra libero eu eleifend volutpat. Phasellus commodo enim purus, in eleifend dolor fringilla in. Donec ultrices neque quis lacus consectetur semper. Aenean aliquet, metus at semper tempus, turpis purus suscipit massa, vel consequat leo mauris id eros. In placerat nulla quam, eu blandit mi aliquam condimentum. Nulla sit amet vestibulum lectus. Nam quis maximus erat. 
          </Paper>
          

          <Card style={{ minWidth: 100,margin:20, padding:10}}  >
            <CardActionArea href= '/elements/Physical'>
                <CardMedia/><AccessibilityIcon />
                <CardContent>
                <h1>Physical</h1>
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{ minWidth: 100,margin:20, padding:10}}>
            <CardActionArea href= '/elements/Spiritual'>
                <CardMedia/><FavoriteIcon />
                <CardContent>
                <h1>Spiritual</h1>
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{ minWidth: 100,margin:20, padding:10}}>
            <CardActionArea href= '/elements/Mental'>
                <CardMedia/><SchoolIcon />
                <CardContent>
                    <h1>Mental</h1>
                </CardContent>
            </CardActionArea  >
            </Card>
            <Card style={{ minWidth: 100,margin:20, padding:10}}>
            <CardActionArea href= '/elements/Social'>
                <CardMedia/><GroupIcon />
                <CardContent>
                     <h1>Social</h1>
                </CardContent>
            </CardActionArea>
            </Card>           
        <Grid container spacing={3}>
        <Grid item xs>       
          <img alt='Table of Elements' src={TableColor} style={{paddingTop:80,width:400}}/>
          
        </Grid>
        </Grid>
        </body>
      </div>
    );
  }
}
export default Home;
