import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    margin: '0 auto',
    marginTop: 50,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
  empty: {
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  wordOptions: {
    display: 'flex',
    flexDirection: 'row',
  },
  word: {
    fontSize: 32,
    flexGrow: 1,
  },
  edit: {
    color: theme.palette.primary.main,
  },
  delete: {
    color: theme.palette.error.dark,
  },
  meaning: {
    fontSize: 16,
  },
  input: {
    margin: 8,
    width: '100%',
  },
  button: {
    margin: 8,
  },
}));
