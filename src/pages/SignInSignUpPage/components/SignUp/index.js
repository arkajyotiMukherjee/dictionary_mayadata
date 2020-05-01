import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import {auth, createUserProfileDocument} from '../../../../services/firebase';
import {styles} from './styles';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;
    console.log(displayName);

    if (password !== confirmPassword) {
      alert('Passwords did not match!');
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  };
  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className="title">I do not have an account</div>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.input}
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            variant="outlined"
            required
          />
          <TextField
            className={classes.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            className={classes.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
            required
          />
          <TextField
            className={classes.input}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            variant="outlined"
            required
          />
          <div className={classes.button}>
            <Button variant="outlined" type="submit" color="primary">
              SIGN UP
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
