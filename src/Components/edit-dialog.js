import React, { useState } from 'react';
import CustomButton from './custom-button';
import MenuDialog from './dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuDialogTitle from './dialog-title';
import CustomTextField from './custom-text-input';
import ToastNotification from './toast';
import axiosPreset from '../axios/config';
import ProgressBar from './progress-bar';

export default function EditDialog(props) {

  const [value, setValue] = useState('');
  const [openToast,setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({error:false,messageText:''});
  const [openProg, setOpenProg] = useState(false);

  const handleClose = () => {
    props.onClose(false);
  };

  const handleSave = ()=>{

    if(props.label.toLowerCase() === "phone" && (value.length !== 10 || value.search(/[0-9]/) === -1 )){
      setToastMessage({error: true, messageText: 'Enter a valid phone number'});
      setOpenToast(true);
    }
    else{
      //console.log(props.label.toLowerCase());      
      let newValue = {field: props.label.toLowerCase(), value: value};
      setOpenProg(true);
      let endpoint = (props.user.designation === "student")?
          `/student/${props.user.id}/profile/`:
          `/faculty/${props.user.id}/profile/`;

      endpoint = (props.label.toLowerCase() === "phone")?
                  endpoint+"phone":
                  endpoint+"email";

      console.log(endpoint);
      const payload = {
        id: props.user.id,
      };

      payload[`${props.label.toLowerCase()}`] = value;

      axiosPreset.patch(
        endpoint,
        payload
      ).then((response)=>{
        setToastMessage({error: false, messageText: response.data});
        props.onProfileChange(newValue);
        setOpenProg(false);
        setOpenToast(true);
        props.onClose(false);
        
      }).catch((error)=>{
        console.log(error);
        setToastMessage({error: true, messageText: error.response.data.detail[0].msg});
        setOpenProg(false);
        setOpenToast(true);
      });
      setValue('');
    }
  }


  return (
    <>
      <MenuDialog open={props.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <MenuDialogTitle id="responsive-dialog-title">{`New ${props.label}`}</MenuDialogTitle>
        <DialogContent>
            <CustomTextField
              label={`New ${props.label}`}
              onChange={(event)=>{setValue(event.target.value)}}
              variant="outlined"
              value={value}
            />
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleSave} autoFocus>
            Save
          </CustomButton>
        </DialogActions>
      </MenuDialog>
      <ToastNotification open={openToast} onClose={(open)=>{setOpenToast(open)}} message={toastMessage}/>
      <ProgressBar open={openProg} onClose={()=>{setOpenProg(false)}}/>
    </>
  );
}