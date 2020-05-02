export const styles = (theme) => ({
  root: {
    maxWidth: '90%',
    margin: '0 auto',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
  input: {
    margin: 8,
    width: '100%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 32,
  },
  nonAdmin: {
    color: theme.palette.text.primary,
    margin: '0 auto',
    maxWidth: '60%',
    textAlign: 'center',
  },
});
