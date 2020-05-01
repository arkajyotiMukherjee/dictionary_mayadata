import React, {lazy} from 'react';
import {Switch, Route} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import headerHoc from './hoc/headerHoc';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.scss';
import {globalStyles} from './globalStyles';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const SignInSignUpPage = lazy(() => import('./pages/SignInSignUpPage'));
const AddWordPage = lazy(() => import('./pages/AddWordPage'));

function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={suspenseHoc(headerHoc(LandingPage))} />
      <Route
        exact
        path="/signin"
        component={suspenseHoc(headerHoc(SignInSignUpPage))}
      />
      <Route
        exact
        path="/add"
        component={suspenseHoc(headerHoc(AddWordPage))}
      />
    </Switch>
  );
}

export default withStyles(globalStyles)(Router);
