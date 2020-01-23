import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root:{
      backgroundColor: '#222831',
      borderColor: '#00adb5',
    '& .MuiOutlinedInput-root':{
      color: '#00fff5',
      '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00fff5'
        },
      },
    '& label':{
      color: '#00fff5 !important'
    }
  },
})(TextField);

export default CustomTextField;