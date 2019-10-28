import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Test extends React.Component {

    constructor(props) {
      super(props);
 this.state = {
      email: '',
      password: ''
    };
    this.firebase = firebase;
  }

  createUser() {
    this.firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(user) {

    }).catch(function(error) {
    });
    
  }

render() {
  return (
    <form className={classes.form} noValidate onSubmit={ () => this.createUser()}>

              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
         
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
           
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          </form>
  )
}
}
export default Test;