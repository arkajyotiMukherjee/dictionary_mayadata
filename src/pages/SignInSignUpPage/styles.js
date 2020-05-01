import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '50px auto',
    },
  },
}));
