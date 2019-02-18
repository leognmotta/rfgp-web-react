import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container, StyledLink } from './styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  loginSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Por favor preencha todos os campos!' });
    } else {
      try {
        const response = await api.post('/auth/signin', { email, password });
        console.log(response.data.token);
        login(response.data.token);
        this.props.history.push('/');
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
    return (
      <Container>
        <Form onSubmit={this.loginSubmitHandler}>
          {this.state.error && <p>{this.state.error}</p>}
          <h1>Entrar</h1>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Endereço de e-mail"
            onChange={this.inputChangedHandler}
          />
          <label>Senha: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.inputChangedHandler}
          />
          <StyledLink to="/esqueci-minha-senha">Esqueceu a senha?</StyledLink>
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar nova conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
