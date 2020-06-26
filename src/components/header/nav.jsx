import React from 'react';
import '../style.css';

const Nav = () => {
    return <ul className="navBar">
    <li className="navButton">
      <a>gallery</a>
    <div className="navDropdown">
      <a href="/americanvedas">american vedas</a>
      <a href="/misc">misc. works</a>
      <a href="/photography">photography</a>
    </div>
    </li>
    <li className="navButton">
      <a href="/about">about</a>
    </li>
  </ul>
};

export default Nav;
