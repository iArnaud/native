import * as state from '../state';
import Component from '../components/component.react';
import Menu from './menu.react';
import React from 'react-native';
import {routes, defaultRoute} from '../routes';
import SideMenu from 'react-native-side-menu';
import Router from '../lib/router';
import {
  StatusBarIOS
} from 'react-native';

import appStyle from './app.style';

import '../todos/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
    this.onItemSelected = this.onItemSelected.bind(this);
    this.handleStatusBarAppearance = this.handleStatusBarAppearance.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.refs.menu.toggleMenu();
  }

  componentWillMount() {
    state.appState.on('change', () => {
      this.setState(this.getState()); //eslint-disable-line react/no-did-mount-set-state
    });
  }

  getState() {
     return {
       pendingActions: state.pendingActionsCursor(),
       todos: state.todosCursor()
     };
   }

  onButtonPressed() {
    this.refs.menu.toggleMenu();
  }

  handleStatusBarAppearance() {
    StatusBarIOS.setHidden(!(this.refs.menu.isOpen || false), true);
  }

  onItemSelected(itemKey) {
    this.refs.router.pushUnique(itemKey);
  }

  render() {
    const headerProps = {
      ...this.state,
      toggleMenu: this.toggleMenu
    };

    return (
      <SideMenu
        animation='spring'
        disableGestures={true}
        menu={<Menu onItemSelected={this.onItemSelected}/>}
        onChange={this.handleStatusBarAppearance}
        ref='menu'
        style={appStyle.container}>

        <Router
          defaultRoute={defaultRoute}
          headerProps={headerProps}
          passProps={this.state}
          ref='router'
          routes={routes}
          style={appStyle.container}
        />

      </SideMenu>
    );

  }

}

export default App;
