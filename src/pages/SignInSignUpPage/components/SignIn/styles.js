export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  input: {
    margin: 8,
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
});
