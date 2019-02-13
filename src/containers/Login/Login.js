import React, { Component } from 'react';
import api from '../../services/api';

import { connect } from 'react-redux';
import { withStyles, Button, Input } from '@material-ui/core';
import { withRouter, NavLink } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  loginHandler = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    const login = await api.post('/auth/authenticate', {
      email: email,
      password: password
    });

    localStorage.setItem('rfgptoken:', login.data.token);
    localStorage.setItem('rfgpuserid:', login.data.userId);

    this.props.onLogin();

    this.props.history.push('/produtos');
  };

  inputChangedHandler = (event, formName) => {
    if (formName === 'email') {
      this.setState({ email: event.target.value });
    }
    if (formName === 'password') {
      this.setState({ password: event.target.value });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <h1>Login:</h1>
        <form onSubmit={this.loginHandler}>
          <Input
            type="email"
            placeholder="Email"
            onChange={event => this.inputChangedHandler(event, 'email')}
            value={this.state.email}
            className={classes.input}
            fullWidth={true}
          />
          <Input
            id="standard-password-input"
            type="password"
            placeholder="Senha"
            onChange={event => this.inputChangedHandler(event, 'password')}
            value={this.state.password}
            className={classes.input}
            fullWidth={true}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.loginButton}
            fullWidth={true}
          >
            Login
          </Button>
        </form>
        <NavLink to="/esqueci-minha-senha" className={classes.toResetPassword}>
          Esqueceu sua senha?
        </NavLink>
      </div>
    );
  }
}

//styles
const styles = theme => ({
  loginContainer: {
    width: '95%',
    height: '80%',
    maxWidth: 320,
    maxHeight: 320,
    boxShadow: '2px 4px 10px #ccc',
    margin: '40px auto',
    padding: '14px 30px',
    boxSizing: 'border-box'
  },
  loginButton: {
    color: '#fff',
    cursor: 'pointer',
    marginBottom: 20
  },
  input: {
    marginBottom: '20px'
  },
  toResetPassword: {
    textDecoration: 'none',
    textAlign: 'center'
  }
});

//redux
const mapStateToProps = state => {
  return {
    auth: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actionCreators.login()),
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles, { withTheme: true })(Login)));
