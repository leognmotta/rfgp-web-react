import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import { login } from '../../../services/auth';
import { Form, Container, StyledLink } from './styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  loginSubmitHandler = async (event) => {
    event.preventDefault();

    const { history } = this.props;
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Por favor preencha todos os campos!' });
    } else {
      try {
        const response = await api.post('/auth/signin', { email, password });
        login(response.data.token);
        history.push('/');
      } catch (error) {
        const errorMessage = error.response.data.message;
        this.setState({ error: errorMessage });
      }
    }
  };

  inputChangedHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { error, email, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.loginSubmitHandler}>
          {error && <p>{error}</p>}
          <h1>Entrar</h1>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Endereço de e-mail"
              onChange={this.inputChangedHandler}
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.inputChangedHandler}
            />
            <StyledLink to="/esqueci-minha-senha">Esqueceu a senha?</StyledLink>
          </label>
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar nova conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);

/**
 * Prop types
 */
SignIn.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};
