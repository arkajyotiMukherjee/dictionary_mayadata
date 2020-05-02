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
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    '& button': {
      margin: '8px 0',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      '& button': {
        margin: '0 16px',
      },
    },
  },
});
