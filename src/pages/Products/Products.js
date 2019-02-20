import React, { Component } from 'react';

import Product from '../../components/Product/Product';
import {} from './styles';

class Products extends Component {
  state = {
    produtos: [
      {
        nome: 'CADERNO TILIBRA 10 MAT BEN 10',
        ref: '295500',
        preco1: 10.99,
        preco2: 14.99,
        emb1: 4,
        emb2: 1,
        disponivel: 5,
        codebar1: 7891027295562,
        codebar2: 7891027061378,
      },
      {
        nome: 'CADERNO ESPIRAL CAPA DURA COLEGIAL 1 MATÉRIA AVENGERS HEROES 80 FOLHAS',
        ref: '295500',
        preco1: 10.99,
        preco2: 14.99,
        preco3: 20.99,
        emb1: 4,
        emb2: 2,
        emb3: 1,
        disponivel: 5,
        codebar1: 7891027295562,
        codebar2: 7891027061378,
      },
    ],
  };

  render() {
    const { produtos } = this.state;
    return (
      <div>
        {produtos.map(produto => (
          <Product
            key={produto.nome}
            nome={produto.nome}
            reference={produto.ref}
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
    );
  }
}

export default Products;
