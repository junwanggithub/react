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

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {formatName(user)}</h2>
        </div>
        <SearchBar filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   onFilterTextInput={this.handleFilterTextInput}
                   onInStockInput={this.handleInStockInput}
        />
        <ProductTable products={this.props.products} filterText={this.state.filterText}
                      inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable;
