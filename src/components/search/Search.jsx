import React, { Component } from "react";
import './search.css'
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="search">
        <div className="container-input-search">
            <input type="text" name="search" className="input-search" placeholder="Buscar"></input>
        </div>
        <SearchIcon />
    </div>
    )
  }
}

export default Search;
