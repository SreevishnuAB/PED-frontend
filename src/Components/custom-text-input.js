import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root:{
      backgroundColor: '#001a29',
      borderColor: '#779eb3',
    '& .MuiOutlinedInput-root':{
      color: '#bbd7e5',
      '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#779eb3'
        },
      },
    '& label':{
      color: '#bbd7e5 !important'
    },
  },
})(TextField);

export default CustomTextField;