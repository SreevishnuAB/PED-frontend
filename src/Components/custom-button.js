import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
    root: {
      backgroundColor: '#222831',
      color: '#00fff5',
      borderColor: '#00adb5',
      borderWidth: '1px',
      borderStyle: 'solid',
      width: '50px',
      padding: '5px 35px 5px 35px',
      '&:hover':{
        backgroundColor: '#00adb5',
        color: '#222831',
      }
    }
  })(Button);

  export default CustomButton;