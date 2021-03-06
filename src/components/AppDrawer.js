import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {School, Group, Home, Favorite, Accessibility, } from '@material-ui/icons/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import * as firebase from 'firebase/app';
import 'firebase/auth';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  LoginButton: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'black',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
   
  },
  
}));

// const firebaseAppAuth = firebaseApp.auth();


export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [auth] = React.useState(true);
  const [auth, setAuth] = React.useState(false); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAuth = Boolean(anchorEl);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    setAuth(false);
    firebase.auth().signOut();
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogOut = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="a" href= '/Pages/Home' style={{color: 'white',
  textDecoration: 'none'}}>
            Elements of Awesome
          </Typography>
          {auth && (
            <div className={classes.LoginButton}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                position='static'
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openAuth}
                onClose={handleClose}
              >
                <MenuItem component="a" href= '/Pages/Profile' onClick={handleClose}>Profile</MenuItem>
                <MenuItem component="a" href= '/Pages/login'onClick={handleLogOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button component="a" href= '/Pages/Profile'>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText>Dashboard</ListItemText> 
            </ListItem>
            <ListItem button component="a" href= '/elements/Physical'>
              <ListItemIcon><Accessibility /></ListItemIcon>
              <ListItemText>Physical</ListItemText> 
            </ListItem>
            <ListItem button component="a" href= '/elements/Spiritual'>
              <ListItemIcon><Favorite /></ListItemIcon>
              <ListItemText>Spiritual</ListItemText> 
           </ListItem>
           <ListItem button component="a" href= '/elements/Mental'>
              <ListItemIcon><School /></ListItemIcon>
              <ListItemText>Mental</ListItemText> 
            </ListItem>
            <ListItem button component="a" href= '/elements/Social'>
              <ListItemIcon><Group /></ListItemIcon>
              <ListItemText>Social</ListItemText> 
           </ListItem>
        </List>
        
      </Drawer>
      {/* <Grid container spacing={1}>
     <Grid item xs>
      <Card style={{ display: 'flex', Width: 100, margin:10, padding:10}}  >
            <CardActionArea href= '/Pages/login'>
                <CardMedia/>
                <CardContent>
                <h1>Sign In</h1>
                </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs>
            <Card style={{ display: 'flex', Width: 100, margin:10, padding:10}}  >
            <CardActionArea href= '/Pages/signup'>
                <CardMedia/>
                <CardContent>
                <h1>Sign Up</h1>
                </CardContent>
            </CardActionArea>
            </Card></Grid></Grid> */}
    </div>
  );
}
