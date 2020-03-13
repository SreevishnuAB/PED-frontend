import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

const MenuDialog = withStyles({
    paper:{
      backgroundColor: '#1a4051',
      color: '#bbd7e5'
    }
  })(Dialog);

  export default MenuDialog;