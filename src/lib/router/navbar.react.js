import React from 'react-native';
import {
  View
} from 'react-native';

class Navbar extends React.Component {

  _getCurrentRoute() {
    const routes = this.props.navigator.getCurrentRoutes();
    return routes[routes.length - 1];
  }

  render() {
    const currentRoute = this._getCurrentRoute();
    const {headerProps, navigator} = this.props;

    return React.createElement(currentRoute.navbar, {
      ...headerProps,
      navigator,
      currentRoute
    });
  }

}

Navbar.propTypes = {
  navigator: React.PropTypes.object.isRequired
};

export default Navbar;
