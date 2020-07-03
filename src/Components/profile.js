import React, { useState } from 'react';
import Card from './card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditDialog from './edit-dialog';

const useStyles = makeStyles((theme)=>({
  sectionBounds: {
    border: "1px solid",
    borderRadius: '3px',
    width: 'inherit',
    margin: '10px 5px 10px 10px'
  },
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
    borderRadius: '4px',
    width: '20vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // flexWrap: 'wrap',
    boxShadow: '0px 0px 5px #121212',
    backgroundColor: '#286790',
    margin: '5px'
    
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
    width: '15px',
    height: '15px'
  },
  headerBtn: {
    marginRight: '7px',
    color: '#00fff5',
    '&:hover': {
      backgroundColor: '#00adb5 !important',
      color: '#393e46'
    },
  width: '18px',
  height: '18px'
  },
  avatar:{
    margin: '10px 0px 10px 0px',
    height: '150px !important',
    width: '150px !important',
    borderRadius: '50%',
    border: '2.5px solid #00F7FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
  }
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
          <Typography className={classes.details} variant="h6" component="h4">
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