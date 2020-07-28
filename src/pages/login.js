import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
    this.firebase = firebase;
  }

  handleEdit = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
     console.log(name, value)   
  }

  loginUser = () => {
    // this.handleEdit(e);
    // console.log("start, state is: ", this, this.state);
    console.dir(this);
    const [auth, setAuth] = React.useState(true);
    let email = this.state.email;
    let password = this.state.password;
    console.log('here', email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("errer: login",errorCode, errorMessage)
  // ...
});

  }


render(){
 
  const classes = makeStyles();

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop:80, }}>
      <CssBaseline />
      <div className={classes.paper} style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.loginUser} style={{ paddingTop:20}}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container style={{ paddingTop:20}}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="./signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
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
export default SignIn;