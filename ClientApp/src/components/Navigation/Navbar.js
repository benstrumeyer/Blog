/* NavItemLink.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon, ListItem } from 'react-md';
import { SVGIcon } from 'react-md';
import { Button } from 'react-md';

const MenuIcon = props => (
    <SVGIcon {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SVGIcon>
  );

  const twitterIcon = props => (
    <SVGIcon {...props}
        className="twitter-logo">
    </SVGIcon>
  );

const Navbar = ({ showDrawer }) => {
      return (
          <div className="navbar">
            <span>
                <Button className="menu" icon onClick={showDrawer}><MenuIcon /></Button>
                <span className="nav-title">BSBlog</span>
            </span>
            <span>Image</span>
            <span className="icon-links">
                <FontIcon iconClassName="fa fa-github" className="icon icon-link"></FontIcon>
                <FontIcon iconClassName="fa fa-envelope" className="icon icon-link"></FontIcon>
            </span>
          </div>
      );
    };

Navbar.propTypes = {
    showDrawer: PropTypes.func.isRequired
};

export default Navbar;

 