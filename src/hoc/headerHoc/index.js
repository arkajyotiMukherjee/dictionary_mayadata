import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import NightsStay from '@material-ui/icons/NightsStay';
import WbSunny from '@material-ui/icons/WbSunny';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';

import {styles} from './styles';
import {toggleTheme} from '../../services/actions';
import logo from '../../assets/logo.svg';
import {withTranslation} from 'react-i18next';

const headerHoc = (WrapComponent) => {
  class HocContent extends React.Component {
    handleChange = (checked) =>
      this.props.i18n.changeLanguage(checked ? 'hi' : 'en');

    render() {
      const {classes, isDarkTheme, toggleTheme, history} = this.props;

      return (
        <>
          <div className={classes.root}>
            <AppBar position="relative" className={classes.header}>
              <img
                src={logo}
                alt="logo"
                className={classes.logo}
                onClick={() => history.push('/')}
              />
              <Toolbar>
                <IconButton
                  className={classes.add}
                  edge="end"
                  onClick={() => history.push('/add')}
                >
                  <AddCircleOutline />
                </IconButton>
                {/* Theme Toggle */}
                <IconButton
                  className={classes.theme}
                  edge="end"
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? <NightsStay /> : <WbSunny />}
                </IconButton>
                <IconButton
                  className={classes.signin}
                  edge="end"
                  onClick={() => history.push('/signin')}
                >
                  <AccountCircle />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          <WrapComponent />
        </>
      );
    }
  }

  const mapStateToProps = (state) => ({
    isDarkTheme: state.theme.isDarkTheme,
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleTheme: () => dispatch(toggleTheme()),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(withRouter(withTranslation()(HocContent))));
};

export default headerHoc;
