import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    color: "white",

  }
}));

export default function Nav ({ authenticated, currentUser }) {
  const classes = useStyles();
  return authenticated && currentUser ? (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jam Sesh
          </Typography>
          <NavLink to="/discover">
            <Button className={classes.navButton} color="inherit">Discover</Button>
          </NavLink>
          <NavLink to="/profile">
            <Button className={classes.navButton} color="inherit">Profile</Button>
          </NavLink>
          <NavLink to="/upload">
            <Button className={classes.navButton} color="inherit">Create Post</Button>
          </NavLink>
          <NavLink
          to="/"
          onClick={() => localStorage.clear()}        
        >
          <Button className={classes.navButton} color="inherit">Sign Out</Button>
        </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jam Sesh
          </Typography>
          <NavLink to="/discover">
            <Button className={classes.navButton} color="inherit">Discover</Button>
          </NavLink>
          <NavLink to="/login">
            <Button className={classes.navButton} color="inherit">Sign In</Button>
          </NavLink>
          <NavLink to="/register">
            <Button className={classes.navButton} color="inherit">Sign Up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
