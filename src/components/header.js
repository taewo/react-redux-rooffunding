import React, { Component } from 'react';
import HeaderButton from './header_button';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="logo">
        </div>
        <HeaderButton />
      </div>
    );
  }
}

export default Header;
