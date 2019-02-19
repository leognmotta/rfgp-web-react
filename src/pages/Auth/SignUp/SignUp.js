import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import api from '../../../services/api';

import Spinner from '../../../components/UI/Spinner/Spinner';
import { Form, Container } from './styles';

class SignUp extends Component {
  state = {
    name: '',
    lastName: '',
    storeName: '',
    email: '',
    password: '',
    error: '',
    buttonClicked: false,
  };

  signUpSubmitHandler = async (event) => {
    event.preventDefault();
    this.setState({ buttonClicked: true });

    const {
      name, lastName, storeName, email, password,
    } = this.state;
    const { history } = this.props;

    if (!name || !email || !password || !lastName || !storeName) {
      this.setState({ buttonClicked: false });
      this.setState({ error: 'Por favor preencha todos os campos...' });
    } else {
      try {
        await api.post('/auth/signup', {
          name,
          lastName,
          email,
          password,
          storeName,
        });
        history.push('/');
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
    const { error, buttonClicked } = this.state;

    return (
      <Container>
        <Form onSubmit={this.signUpSubmitHandler}>
          <h1>Registro</h1>
          {error && <p>{error}</p>}
          <label htmlFor="name">
            Nome:
            <input type="text" placeholder="Name" name="name" onChange={this.inputChangedHandler} />
          </label>
          <label htmlFor="lastName">
            Sobrenome:
            <input
              type="text"
              placeholder="Sobrenome"
              name="lastName"
              onChange={this.inputChangedHandler}
            />
          </label>
          <label htmlFor="storeName">
            Loja:
            <input
              type="text"
              placeholder="Loja"
              name="storeName"
              onChange={this.inputChangedHandler}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.inputChangedHandler}
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.inputChangedHandler}
            />
          </label>
          <button type="submit">{buttonClicked ? <Spinner /> : 'Registrar'}</button>
          <hr />
          <Link to="/">Ja tem uma conta?</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);

/**
 * Prop types
 */
SignUp.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};
