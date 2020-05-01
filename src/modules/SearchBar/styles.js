import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.textBlue,
    maxWidth: '80%',
    margin: '0 auto',
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
}));
