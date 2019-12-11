import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      userType:'',
      email: '',
      password: ''
    };
    this.firebase = firebase;
  }

  createUser() {
    let email = this.state.email;
    let password = this.state.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
   
  }

  handleEdit = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
     console.log(name, value)     
  }

  render() {
  const classes = makeStyles();
  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop:80, }}>
      <CssBaseline />
      <div className={classes.paper} style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>
        <Avatar className={classes.avatar} >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} style={{ paddingTop:20}} noValidate onSubmit={this.createUser()}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={this.state.firstName}
                onChange={this.handleEdit}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleEdit}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.handleEdit}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleEdit}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                variant="outlined"
                required
                fullWidth
                name="userType"
                label="What do you want to do?"
                id="userType"
                value={this.state.userType}
                onChange={this.handleEdit}
              >
              <MenuItem value={1}>I am a participant</MenuItem>
              <MenuItem value={2}>I am a sponsor</MenuItem>
          
              </Select>
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ marginTop:20}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" style={{ paddingTop:20}}>
            <Grid item>
              <Link href="./login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Elements of Awesome
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
  }
}

export default SignUp;
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(SignUp);