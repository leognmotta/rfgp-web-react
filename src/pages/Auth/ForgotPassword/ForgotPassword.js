import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import api from '../../../services/api';

import { Form, Container } from './styles';

class ForgotPassword extends Component {
  state = {
    email: '',
    submitted: false,
    error: '',
  };

  submitHandler = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    if (!email) {
      this.setState({ error: 'Por favor preencha seu email!' });
    } else {
      try {
        await api.post('/auth/send-reset-password', { email });
        this.setState({ submitted: true });
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
    const { submitted, email, error } = this.state;
    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          <h1>Reasetar senha</h1>
          {error && <p>{error}</p>}
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
          <button type="submit">{submitted ? 'Enviado!' : 'Resetar senha'}</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(ForgotPassword);
