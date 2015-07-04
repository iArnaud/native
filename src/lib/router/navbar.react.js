import React from 'react-native';
import {
  View
} from 'react-native';

/**
 * Navbar component
 * Acts as a placeholder for route specific headers
 */
class Navbar extends React.Component {

  _getCurrentRoute(navigator) {
    const routes = navigator.getCurrentRoutes();
    return routes[routes.length - 1];
  }

  /**
   * Renders navbar
   * Passes props, headerActions and currentRoute to a given navbar
   * If navbar has not been specified, empty View is rendered
   */
  render() {
    const {passProps, headerActions, navigator} = this.props;
    const currentRoute = this._getCurrentRoute(navigator);

    if (currentRoute.navbar)
      return React.createElement(currentRoute.navbar, {
        ...passProps,
        headerActions,
        navigator,
        currentRoute
      });
    else
      return <View />;
  }

}

Navbar.propTypes = {
  headerActions: React.PropTypes.object,
  navigator: React.PropTypes.object.isRequired,
  passProps: React.PropTypes.object.isRequired
};

export default Navbar;
