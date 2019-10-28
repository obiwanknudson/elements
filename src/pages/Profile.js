import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.firebase = firebase;
  }

  
  render() {
    const {
        user,
        signOut,
      } = this.props;
    

    return (
      <div className="App" style={{ paddingTop:60, }} align="center">

        <body style={{ margin:20,}}>
          <h1>Profile</h1> 
          
          <Card  href="./login" style={{ minWidth: 275, margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><AccountCircle/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                
                <div>{user 
                  ? <p>Hello, {user.displayName}</p>
                  : <p>Please sign in.</p>
              }
              {user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button href="./login"> Sign in </button>
              }
              </div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Becoming awesome since 10/1/2019
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <div>
        <Grid container size xs={12} >
        <Grid item>
        <Card width={375} style={{ minWidth: 375,  minHeight: 500, margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><AccountCircle/>
                <CardContent>
                <Table/>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
        <Grid item>
        <Card style={{ minWidth: 375,margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><AccessibilityIcon />
                <CardContent>
                Progess
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{ minWidth: 375,margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><FavoriteIcon />
                <CardContent>
                Progress
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{ minWidth: 375,margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><SchoolIcon />
                <CardContent>
                    Progress
                </CardContent>
            </CardActionArea>
            </Card>
            <Card style={{ minWidth: 375,margin:20, padding:10}}>
            <CardActionArea>
                <CardMedia/><GroupIcon />
                <CardContent>
                     Progress
                </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
        </Grid> 
        </div>
        </body>
      </div>
    );
  }
}
export default Profile;
