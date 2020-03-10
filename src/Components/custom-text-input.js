import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root:{
      backgroundColor: '#0d0021',
      borderColor: '#562b73',
    '& .MuiOutlinedInput-root':{
      color: '#b39ddb',
      '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#562b73'
        },
      },
    '& label':{
      color: '#b39ddb !important'
    },
  },
})(TextField);

export default CustomTextField;