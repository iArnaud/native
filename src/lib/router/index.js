import React from 'react-native';
import Navbar from './navbar.react';
import {
  Navigator,
  View
} from 'react-native';

class Router extends React.Component {

  constructor(props) {
    super(props);
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  pushUnique(routeKey) {
    const navigator = this.refs.navigator;
    const route = this.getRoute(routeKey);

    if (route) {
      const currentRoutes = navigator.getCurrentRoutes();
      let currentRoute = currentRoutes[currentRoutes.length - 1];

      // Transition only when routes are different
      if (currentRoute.component !== route.component)
        this.refs.navigator.replace(route);
    }
  }

  getRoute(page) {
    return this.props.routes[page];
  }

  configureScene(route) {
    return route.animationType || this.props.animationType || Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    var Handler = route.component;

    const router = {
      ...navigator,
      transitionTo: (route) => navigator.push(this.getRoute(route)),
      getRoute: this.getRoute.bind(this),
      toggleMenu: () => {}
    };

    return (
      <View style={route.style}>
        <Handler router={router} {...this.props.passProps} />
      </View>
    );
  }

  render() {
    return (
        <Navigator
          {...this.props}
          configureScene={this.configureScene}
          initialRoute={this.props.defaultRoute}
          navigationBar={<Navbar {...this.props}/>}
          ref='navigator'
          renderScene={this.renderScene}
        />
    );

  }

}

Router.propTypes = {
  animationType: React.PropTypes.object,
  defaultRoute: React.PropTypes.object.isRequired,
  headerProps: React.PropTypes.object,
  passProps: React.PropTypes.object,
  routes: React.PropTypes.object.isRequired
};

export default Router;
