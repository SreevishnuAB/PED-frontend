import '../App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';

const MenuDialog = withStyles({
  paper:{
    backgroundColor: '#393e46',
    color: '#00fff5'
  }
})(Dialog);

const MenuDialogTitle = withStyles({
  root:{
    '& .MuiTypography-root':{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
})(DialogTitle)

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
    backgroundColor: '#222831',
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
  user: {
    height: '45px',
    color:'#00fff5',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831'
  },
  menuContent: {
    backgroundColor: '#222831',
    color: '##00adb5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: '0px !important',
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }

  const handleLogout = ()=>{
    handleOpenMenu();
    props.onLogout();
  }

  const handleViewProfile = ()=>{
    handleOpenMenu();
    props.onMenuClick("profile");
  }
  return (
  <div className={classes.root}>
    <MenuDialog onClose={handleOpenMenu} aria-labelledby="user-menu" open={openMenu}>
      <MenuDialogTitle className={classes.dialogTitle} id="user-menu-title"><AccountCircleIcon fontSize="large" className={classes.logoutBtn}/><span>{props.username}</span></MenuDialogTitle>
      <DialogContent className={classes.menuContent}>
        <Button className={classes.menuButton} onClick={handleViewProfile}>View Profile</Button>
        <Button className={classes.menuButton}>Change Password</Button>
        <Button className={classes.menuButton} onClick={handleLogout}>Logout</Button>
      </DialogContent>
    </MenuDialog>

    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Placement Eligibility Dashboard
        </Typography>
        {props.authenticated && <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="logout" onClick={handleOpenMenu}>
          <AccountCircleIcon className={classes.logoutBtn}/>
        </IconButton>}
      </Toolbar>
    </AppBar>
  </div>
  );
}