export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    zIndex: 1100,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    background: theme.palette.background.paper,
    boxShadow: theme.palette.shadows.header,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  logo: {
    height: 40,
    margin: 8,
  },
  langToggle: {
    flexGrow: 1,
  },
  theme: {
    color: theme.palette.secondary.buttonTheme,
  },
  signin: {
    color: theme.palette.secondary.main,
  },
  add: {
    color: theme.palette.primary.main,
  },
});
