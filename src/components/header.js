import React, { Component } from 'react';
import './header.scss'
class Header extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <h1 className="top-header">Мега Рандомайзер команд  "ФОК - 4000"</h1>
        <h2 className="center-align sub-header">Специально для футболистов, которым нужно минимум 15 минут, чтобы поделиться</h2>
      </React.Fragment>

    );
  }
}

export default Header;