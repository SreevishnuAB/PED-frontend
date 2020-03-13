import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
    root: {
      backgroundColor: '#001a29',
      color: '#bbd7e5',
      borderColor: '#779eb3',
      borderWidth: '1px',
      borderStyle: 'solid',
      width: '50px',
      padding: '5px 35px 5px 35px',
      '&:hover':{
        backgroundColor: '#bbd7e5',
        color: '#001a29',
      }
    }
  })(Button);

  export default CustomButton;