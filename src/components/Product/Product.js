import React from 'react';

import Paper from '../UI/Paper/Paper';
import {
  Container, Info, Prices, Stock, Controller,
} from './styles';

const Product = (props) => {
  const {
    nome, reference, preco1, preco2, preco3, emb1, emb2, emb3, disponivel,
  } = props;
  return (
    <Container>
      <Paper bgColor="#fff" flexDirection="column">
        <Info>
          <p>
            <strong>{nome}</strong>
          </p>
          <p>
            <strong>Ref: </strong>
            {reference}
          </p>
        </Info>
        <Prices>
          <div>
            <span>
              <strong>Embalagens:</strong>
            </span>
            <span>
              <strong>Precos:</strong>
            </span>
          </div>
          <div>
            <span>{emb1}</span>
            <span>{preco1}</span>
          </div>
          <div className="highlight">
            <span>{emb2}</span>
            <span>{preco2}</span>
          </div>
          <div>
            <span>{emb3}</span>
            <span>{preco3}</span>
          </div>
        </Prices>
        <Stock>
          <div>
            <span>
              <strong>Dsponivel: </strong>
            </span>
            <span>{disponivel}</span>
          </div>
        </Stock>
      </Paper>
    </Container>
  );
};

export default Product;
