import React, { useState } from 'react';
import Card from './card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditDialog from './edit-dialog';

const useStyles = makeStyles((theme)=>({
  cards: {
    width: '95%',
    // backgroundColor: '#375e79',
    margin: '5px',
//    flex: '1',
    // boxShadow: '0px 0px 5px #121212',
    // color: '#ffffff',
    padding: '3px'
  },
  cardContainer: {
    borderRadius: '5px',
    width: '350px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // flexWrap: 'wrap',
    boxShadow: '0px 0px 10px 1.5px #121212',
    backgroundColor: '#286790',
    margin: '5px',
    maxHeight: "815px"
  },
  details: {
    textAlign: 'right',
  },
  headerContainer:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center !important',
    marginBottom: '15px'
  },
  header: {
    flex: '2'
  },
  editIcon:{
    width: '17.5px',
    height: '17.5px'
  },
  headerBtn: {
    marginRight: '7px',
    color: '#00fff5',
    '&:hover': {
      backgroundColor: '#00adb5 !important',
      color: '#393e46'
    },
    width: '20px',
    height: '20px'
  },
  avatar:{
    margin: '10px 0px 10px 0px',
    height: '200px !important',
    width: '200px !important',
    borderRadius: '50%',
    border: '2.5px solid #00F7FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a4051',
    boxShadow: '0px 0px 10px 1.5px #121212',
  },
  subContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
  },
  // subContainer1:{
  //   width: '350px',
  //   height: '350px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   boxShadow: '5px #121212',
  //   backgroundColor: '#286790',
  //   borderRadius: '5px',
  //   marginBottom: '7.5px'
  // },
  // subContainer2:{
  //   marginTop: '7.5px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'stretch',
  //   width: '100%',
  //   boxShadow: '5px #121212',
  //   backgroundColor: '#286790',
  //   borderRadius: '5px'
  // }
}));


export default function Profile(props){

  const [openDialog, setOpenDialog] = useState(false);
  const [label, setLabel] = useState('');
  const [profile, setProfile] = useState(props.profile);
  const classes = useStyles();

  const handleProfileChange = (newField)=>{
    let updatedProf = profile;
    updatedProf[newField.field.toLowerCase()] = newField.value;
    setProfile(updatedProf);
  }

  const handleEditDialog = (open)=>{
    setOpenDialog(open);
  }

  const handleEditPhone = ()=>{
    setLabel("Phone");
    setOpenDialog(true);
  }

  const handleEditEmail = ()=>{
    setLabel("Email");
    setOpenDialog(true);
  }

  return(
    <div className={props.className}>
      <EditDialog open={openDialog} label={label} user={props.student} onProfileChange={handleProfileChange} onClose={handleEditDialog}/>
      <div className={classes.cardContainer}>
        <div className={classes.avatar}>
          <Typography className={classes.details} variant="h5" component="h5">
            {profile.name}
          </Typography> 
        </div>
        <div className={classes.subContainer}>
          {Object.keys(profile).filter(key => key !== "name").map((key, index)=>(
          <div key={index} className={classes.cards}>
            {(["phone", "email"].includes(key.toLowerCase()))?(<div className={classes.headerContainer}>
            <Typography className={classes.header} gutterBottom>
              {key.toUpperCase()}
            </Typography>
            <IconButton className={classes.headerBtn} onClick={(key.toLowerCase() === "phone")?handleEditPhone:handleEditEmail} edge="end" caria-label="edit">
              <EditIcon className={classes.editIcon}/>
            </IconButton>
            </div>):(<Typography className={classes.header} gutterBottom>
              {key.toUpperCase()}
            </Typography>)}
            <Typography className={classes.details} variant="h6" component="h4">
              {(key !== "email")?profile[key].toUpperCase():profile[key]}
            </Typography>
          </div>))}
        </div>
      </div>
    </div>
  );
}