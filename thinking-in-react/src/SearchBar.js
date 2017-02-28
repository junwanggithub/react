import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
          <form>
              <input type="text" placeholder="Search..." value={this.props.filterText}
                     onChange={this.handleFilterTextInputChange}/>
              <div>
                  <input type="checkbox" checked={this.props.inStockOnly}
                         onChange={this.handleInStockInputChange}/>
                  <span>Only show products in stock</span>
              </div>

          </form>
        );
    }
}

export default SearchBar;