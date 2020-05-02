export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 32,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: '40%',
    },
  },
  input: {
    margin: 8,
    width: '100%',
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 32,
    '& button': {
      width: '40%',
    },
  },
  checkAdmin: {
    marginLeft: 0,
  },
});
