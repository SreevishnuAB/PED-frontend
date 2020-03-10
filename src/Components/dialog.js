import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

const MenuDialog = withStyles({
    paper:{
      backgroundColor: '#562b73',
      color: '#b39ddb'
    }
  })(Dialog);

  export default MenuDialog;