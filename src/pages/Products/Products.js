import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { FaSearch, FaExclamationCircle } from 'react-icons/fa';
import api from '../../services/api';
import { logout } from '../../services/auth';
import Spinner from '../../components/UI/Spinner/Spinner';
import Paper from '../../components/UI/Paper/Paper';
import Product from '../../components/Product/Product';
import SearchBar from '../../components/SearchBar/SearchBar';
import {} from './styles';

class Products extends Component {
  state = {
    produtos: [],
    option: 'name',
    searchFor: '',
    searching: false,
    error: '',
  };

  inputChangedHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchHandler = async (event) => {
    event.preventDefault();
    this.setState({ searching: true });
    const { option, searchFor } = this.state;
    const { history } = this.props;

    try {
      if (option === 'name') {
        const products = await api.get(`/shop/products/${searchFor}`);
        this.setState({ searching: false, produtos: products.data.produtos, error: '' });
      } else if (option === 'codebar') {
        const products = await api.get(`/shop/product/${searchFor}`);
        this.setState({ searching: false, produtos: [products.data.produtos], error: '' });
      }
    } catch (error) {
      if (error.response.status === 401) {
        logout();
        history.push('/');
      }

      const errorMessage = error.response.data.message;
      this.setState({ searching: false, error: errorMessage, produtos: [] });
    }
  };

  render() {
    const {
      produtos, option, searchFor, searching, error,
    } = this.state;

    const errorElement = (
      <Paper bgColor="#d9534f" flexDirection="row" padding="1">
        <FaExclamationCircle color="#fff" size="64" />
        <p style={{ color: '#fff', marginLeft: '20px' }}>{error}</p>
      </Paper>
    );
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Buscar Produtos:</h1>
        <SearchBar
          option={option}
          searchFor={searchFor}
          inputChanged={this.inputChangedHandler}
          onSearch={this.searchHandler}
          element={searching ? <Spinner color="#262626" /> : <FaSearch size="22px" />}
        />
        <div style={{ maxWidth: '360px', margin: '3em auto' }}>{error && errorElement}</div>
        <div>
          {produtos.map(produto => (
            <Product
              key={produto.nome}
              nome={produto.nome}
              reference={produto.referencia}
              preco1={produto.preco1}
              preco2={produto.preco2}
              preco3={produto.preco3}
              emb1={produto.emb1}
              emb2={produto.emb2}
              emb3={produto.emb3}
              disponivel={produto.disponivel}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Products);
