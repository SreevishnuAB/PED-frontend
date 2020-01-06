import '../App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#393e46',
    borderStyle: 'solid',
    borderWidth: '1px 0px',
    borderColor: '#00fff5',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuButton: {
    color: '#00fff5',
    backgroundColor: '#393e46',
  },
  title: {
    color: '#00fff5'
  },
  condRend:{
    visibility: 'hidden',
  },
  logoutBtn: {
    padding:'2px !important'
  },
  menuPaper: {
    backgroundColor: '#393e46',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00adb5',
    color:'#00fff5',
    padding: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  user: {
    height: '45px',
    color:'#00fff5',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831'
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event)=>{
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }
  const handleLogout = ()=>{
    setAnchorEl(null);
    props.onLogout();
  }
  return (
  <div className={classes.root}>
    
    <Popper open={openMenu} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={0}>
            <Paper className={classes.menuPaper}>
              <Typography className={classes.user}>{props.username}</Typography>
              <Button className={classes.menuButton} >Profile</Button>
              <Button className={classes.menuButton}>Change Password</Button>
              <Button className={classes.menuButton} onClick={handleLogout}>Logout</Button>
            </Paper>
          </Fade>
        )}
    </Popper>

    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Placement Eligibility Dashboard
        </Typography>
        {props.authenticated && <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="logout" onClick={handleMenu}>
          <AccountCircleIcon className={classes.logoutBtn}/>
        </IconButton>}
      </Toolbar>
    </AppBar>
  </div>
  );
}