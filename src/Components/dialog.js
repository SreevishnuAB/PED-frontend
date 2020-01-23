import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

const MenuDialog = withStyles({
    paper:{
      backgroundColor: '#393e46',
      color: '#00fff5'
    }
  })(Dialog);

  export default MenuDialog;