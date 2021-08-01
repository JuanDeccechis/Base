import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Search from '../search/Search';
import './nav.css';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      return(
        <ul className="nav">
            <li>
                <NavLink exact to="/" className="link nav-text" activeClassName="active"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/FAQ" className="link" activeClassName="active"> <HelpIcon className="icon" /> </NavLink>
            </li>
            <li>
                <NavLink to="/login" className="link" activeClassName="active"> <AccountCircleIcon className="icon" /> </NavLink>
            </li>
            {!this.props.isMobile && 
                <li className="search-bar">
                    <Search />
                </li>
            }
        </ul>
      )
  }
}

export default Nav;
