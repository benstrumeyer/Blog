/* NavItemLink.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon, ListItem } from 'react-md';

/**
 * Due to the fact that react-router uses context and most of the components
 * in react-md use PureComponent, the matching won't work as expected since
 * the PureComponent will block the context updates. This is a simple wrapper
 * with Route to make sure that the active state is correctly applied after
 * an item has been clicked.
 */
const NavItemLink = ({ routeName, router, routeOptions, label }) => {
      return (
        <ListItem
          primaryText={'test'}
        />
      );
    };

NavItemLink.propTypes = {
    routeName: PropTypes.string.isRequired,
    router: PropTypes.object.isRequired,
    routeOptions: PropTypes.object.isRequired,
    label:  PropTypes.string.isRequired
};
export default NavItemLink;

 