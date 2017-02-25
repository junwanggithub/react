import React, { Component } from 'react';
import logo from './logo.svg';
import './FilterableProductTable.css';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

class FilterableProductTable extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {formatName(user)}</h2>
        </div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
