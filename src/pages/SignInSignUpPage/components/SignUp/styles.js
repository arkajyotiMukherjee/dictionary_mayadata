export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      width: '40%',
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
});
