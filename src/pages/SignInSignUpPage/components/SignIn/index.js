import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';

import {auth, signInWithGoogle} from '../../../../services/firebase';
import {styles} from './styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    console.log(name);
    this.setState({[name]: value});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.input}
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            className={classes.input}
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            variant="outlined"
            required
          />

          <div className={classes.buttons}>
            <Button variant="outlined" type="submit" color="primary">
              Sign In
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SignIn));
