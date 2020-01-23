import React, { useState } from 'react';
import CustomButton from './custom-button';
import MenuDialog from './dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuDialogTitle from './dialog-title';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CustomTextField from './custom-text-input';
import ToastNotification from './toast';


export default function EditDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [value, setValue] = useState('');
  const [openToast,setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({error:false,messageText:''});

  const handleClose = () => {
    props.onClose(false);
  };

  const handleSave = ()=>{
    let changedField = {field: props.label, value: value};
    if(props.label.toLowerCase() === "phone" && (value.length !== 10 || value.search(/[0-9]/) === -1 )){
      setToastMessage({error: true, messageText: 'Enter a valid phone number'});
      setOpenToast(true);
    }
    else if(props.label.toLowerCase() === "email" && (value.search(/[@]/) === -1 || value.charAt(0) === '.')){
      setToastMessage({error: true, messageText: 'Enter a valid email'});
      setOpenToast(true);
    }
    else{
      props.onProfileChange(changedField);
      props.onClose(false);
      setValue('');
    }
  }


  return (
    <>
      <MenuDialog fullScreen={fullScreen} open={props.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
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
    </>
  );
}