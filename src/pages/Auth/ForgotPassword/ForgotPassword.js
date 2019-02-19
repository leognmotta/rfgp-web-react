import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FaCheckCircle } from 'react-icons/fa';
import api from '../../../services/api';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Paper from '../../../components/UI/Paper/Paper';
import { Form, Container } from './styles';

class ForgotPassword extends Component {
  state = {
    email: '',
    submitted: false,
    buttonClicked: false,
    error: '',
  };

  submitHandler = async (event) => {
    event.preventDefault();
    this.setState({ buttonClicked: true });

    const { email } = this.state;

    if (!email) {
      this.setState({ buttonClicked: false });
      this.setState({ error: 'Por favor preencha seu email!' });
    } else {
      try {
        await api.post('/auth/send-reset-password', { email });
        this.setState({ submitted: true });
      } catch (error) {
        this.setState({ buttonClicked: false });
        const errorMessage = error.response.data.message;
        this.setState({ error: errorMessage });
      }
    }
  };

  inputChangedHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      submitted, email, error, buttonClicked,
    } = this.state;

    let element = (
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
        <button type="submit">{buttonClicked ? <Spinner /> : 'Enviar'}</button>
      </Form>
    );

    if (submitted) {
      element = (
        <Paper bgColor="#4BB543" flexDirection="row">
          <FaCheckCircle color="#fff" size="64" />
          <p style={{ color: '#fff', marginLeft: '20px' }}>
            O email foi enviado com sucesso, caso não encontre, cheque sua caixa de spam!
          </p>
        </Paper>
      );
    }
    return <Container>{element}</Container>;
  }
}

export default withRouter(ForgotPassword);
