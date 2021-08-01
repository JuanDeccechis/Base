import React, { Component } from "react";
import './search.css'
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    
  }

  render() {
    return (
    <div className="search">
        <div className="container-input-search">
            <input type="text" name="search" className="input-search" placeholder="Buscar" value={this.state.search} onChange={this.handleChangeSearch}></input>
        </div>
        <SearchIcon />
    </div>
    )
  }
}

export default Search;
