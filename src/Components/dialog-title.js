import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const MenuDialogTitle = withStyles({
    root:{
      '& .MuiTypography-root':{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }
  })(DialogTitle);

  export default MenuDialogTitle;