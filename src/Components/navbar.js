import '../App.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuDialog from './dialog';
import MenuDialogTitle from './dialog-title';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import CustomButton from './custom-button';
import DialogActions from '@material-ui/core/DialogActions';
import CustomTextField from './custom-text-input';
import ToastNotification from './toast';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw'
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
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    margin: '5px',
  },
  dialogTitle:{
    width: '250px !important'
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [openPwd, setOpenPwd] = useState(false);
  const [pwdOld, setPwdOld] = useState('');
  const [pwdNew, setPwdNew] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({error: false, messageText: ''});

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }

  const handleLogout = ()=>{
    handleOpenMenu();
    props.onLogout();
  }

  const handleSave = ()=>{
    /*TODO* backend integration*/

    if(!pwdNew || !pwdOld){
      setToastMessage({error: true, messageText: 'Enter a valid password'});
      setOpenToast(true);
    }
    else{
      handleOpenPwd();
      setPwdOld('');
      setPwdNew('');
    }
  }

  const handleOpenPwd = ()=>{
    setOpenPwd(!openPwd);
    setOpenMenu(false);
  }
  const handleViewProfile = ()=>{
    handleOpenMenu();
    props.onProfileClick();
    //props.onMenuClick(match.url);
  }
  return (
  <div className={classes.root}>
    <MenuDialog onClose={handleOpenMenu} aria-labelledby="user-menu" open={openMenu}>
      <MenuDialogTitle className={classes.dialogTitle} id="user-menu-title"><AccountCircleIcon fontSize="large" className={classes.logoutBtn}/><span>{props.username}</span></MenuDialogTitle>
      <DialogContent className={classes.menuContent}>
        <Button className={classes.menuButton} onClick={handleViewProfile}>View Profile</Button>
        <Button className={classes.menuButton} onClick={handleOpenPwd}>Change Password</Button>
        <Button className={classes.menuButton} onClick={handleLogout}>Logout</Button>
      </DialogContent>
    </MenuDialog>

    <MenuDialog open={openPwd} onClose={handleOpenPwd} aria-labelledby="responsive-dialog-title">
      <MenuDialogTitle id="responsive-dialog-title">Change Password</MenuDialogTitle>
      <DialogContent className={classes.dialogContent}>
        <CustomTextField
          className={classes.textField}
          label={`Old password`}
          onChange={(event)=>{setPwdOld(event.target.value)}}
          variant="outlined"
          value={pwdOld}
          type="password"
        />
        <CustomTextField
          className={classes.textField}
          label={`New password`}
          onChange={(event)=>{setPwdNew(event.target.value)}}
          variant="outlined"
          value={pwdNew}
          type="password"
        />
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={handleSave} autoFocus>
          Save
        </CustomButton>
      </DialogActions>
    </MenuDialog>
    <ToastNotification open={openToast} onClose={(open)=>{setOpenToast(open)}} message={toastMessage}/>

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