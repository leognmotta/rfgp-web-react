import React from 'react';

import { Container } from './styles';

const SearchBar = ({
  option, onSearch, inputChanged, searchFor, element,
}) => (
  <Container>
    <form onSubmit={onSearch}>
      <div className="search-bar">
        <input type="text" onChange={inputChanged} name="searchFor" value={searchFor} />

        <button type="submit">{element}</button>
      </div>
      <div className="search-for">
        <input
          type="radio"
          name="option"
          value="name"
          onChange={inputChanged}
          checked={option === 'name'}
        />
        Nome
        <input
          type="radio"
          name="option"
          value="codebar"
          onChange={inputChanged}
          checked={option === 'codebar'}
        />
        Codigo de barra
      </div>
    </form>
  </Container>
);

export default SearchBar;
