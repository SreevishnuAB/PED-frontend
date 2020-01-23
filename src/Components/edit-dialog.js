import React, { useState } from 'react';
import CustomButton from './custom-button';
import MenuDialog from './dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuDialogTitle from './dialog-title';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CustomTextField from './custom-text-input';

export default function EditDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [value, setValue] = useState('');

  const handleClose = () => {
    props.onClose(false);
  };

  const handleSave = ()=>{
    let changedField = {field: props.label, value: value};
//    console.log(changedField);
    props.onValueChange(changedField);
    props.onClose(false);

  }


  return (
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
  );
}