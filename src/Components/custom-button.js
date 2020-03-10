import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
    root: {
      backgroundColor: '#0d0021',
      color: '#b39ddb',
      borderColor: '#562b73',
      borderWidth: '1px',
      borderStyle: 'solid',
      width: '50px',
      padding: '5px 35px 5px 35px',
      '&:hover':{
        backgroundColor: '#b39ddb',
        color: '#0d0021',
      }
    }
  })(Button);

  export default CustomButton;