import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    height: 'inherit',
    margin: '15px'
  },
  cards: {
    minWidth: '270px',
    backgroundColor: '#181818',
    border: '1px solid #00fff5',
    margin: '5px',
    flex: '1',
    color: '#00fff5',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'stretch', 
    justifyContent: 'center',
    flex: '1',
    flexWrap: 'wrap'
  },
  details: {
    textAlign: 'right',
  },
  headerContainer:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center !important',
    marginBottom: '20px'
  },
  header: {
    flex: '2'
  },
  headerBtn: {
    marginRight: '7px',
    color: '#00fff5',
    '&:hover': {
      backgroundColor: '#00adb5 !important',
      color: '#393e46'
    }
  },
}));


export default function Profile(props){

  const [openDialog, setOpenDialog] = useState(false);
  const [label, setLabel] = useState('');

  const classes = useStyles();

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
    <React.Fragment>
      <EditDialog open={openDialog} label={label} onProfileChange={props.onProfileChange} onClose={handleEditDialog}/>
      <fieldset className={classes.sectionBounds}>
        <legend>Profile</legend>
        <div className={classes.cardContainer}>
          <Card className={classes.cards}>
            <CardContent>
              <Typography className={classes.header} gutterBottom>
                ID
              </Typography>
              <Typography className={classes.details} variant="h5" component="h3">
                {props.profile.id}
              </Typography>
              <Typography className={classes.details} variant="h6" component="h4">
                {props.profile.name}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cards}>
            <CardContent>
              <div className={classes.headerContainer}>
                <Typography className={classes.header} gutterBottom>
                  PHONE
                </Typography>
                <IconButton className={classes.headerBtn} onClick={handleEditPhone} edge="end" aria-label="edit">
                  <EditIcon/>
                </IconButton>
              </div>
              <Typography className={classes.details} variant="h6" component="h4">
                {props.profile.phone}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cards}>
            <CardContent>
              <div className={classes.headerContainer}>
                <Typography className={classes.header} gutterBottom>
                  EMAIL
                </Typography>
                <IconButton className={classes.headerBtn} onClick={handleEditEmail} edge="end" caria-label="edit">
                  <EditIcon/>
                </IconButton>
              </div>
              <Typography className={classes.details} variant="h6" component="h4">
                {props.profile.email}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </fieldset>
    </React.Fragment>
  );
}