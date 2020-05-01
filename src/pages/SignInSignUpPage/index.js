import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {useStyles} from './styles';

const SignInSignUpPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
