import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../../services/api';

import { Form, Container } from './styles';

class ResetPassword extends Component {
  state = {
    password: '',
    error: '',
  };

  submitHandler = async (event) => {
    event.preventDefault();

    const { history, match } = this.props;
    const { password } = this.state;

    if (!password) {
      this.setState({ error: 'Por favor preencha todos os campos!' });
    } else {
      try {
        await api.put(`/auth/reset-password/${match.params.token}`, { password });
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
    const { error, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          <h1>Entrar</h1>
          {error && <p>{error}</p>}
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.inputChangedHandler}
            />
          </label>
          <button type="submit">Resetar senha</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(ResetPassword);

/**
 * Prop types
 */
ResetPassword.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
  match: PropTypes.objectOf(Object).isRequired,
};
