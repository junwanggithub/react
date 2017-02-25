import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
          <form>
              <input type="text" placeholder="Search..." />
              <div>
                  <input type="checkbox" />
                  <span>Only show products in stock</span>
              </div>

          </form>
        );
    }
}

export default SearchBar;