import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

import { Form, Container } from './styles';

class SignUp extends Component {
  state = {
    name: '',
    lastName: '',
    storeName: '',
    email: '',
    password: '',
    error: '',
  };

  signUpSubmitHandler = async (event) => {
    event.preventDefault();

    const {
      name, lastName, storeName, email, password,
    } = this.state;

    if (!name || !email || !password || !lastName || !storeName) {
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
        this.props.history.push('/');
      } catch (error) {
        const errorMessage = error.response.data.message;
        this.setState({ error: errorMessage });
      }
    }
  };

  inputChangedHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.signUpSubmitHandler}>
          <h1>Registro</h1>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Nome:</label>
          <input type="text" placeholder="Name" name="name" onChange={this.inputChangedHandler} />
          <label>Sobrenome:</label>
          <input
            type="text"
            placeholder="Sobrenome"
            name="lastName"
            onChange={this.inputChangedHandler}
          />
          <label>Loja:</label>
          <input
            type="text"
            placeholder="Loja"
            name="storeName"
            onChange={this.inputChangedHandler}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.inputChangedHandler}
          />
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.inputChangedHandler}
          />
          <button type="submit">Registrar</button>
          <hr />
          <Link to="/">Ja tem uma conta?</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
