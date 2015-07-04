import React from 'react-native';
import Component from '../components/component.react';
import {msg} from '../intl/store';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import style from './header.style';

class Header extends Component {

  handleBackButtonClick(isMainView) {
    if (isMainView)
      this.props.toggleMenu();
    else
      this.props.navigator.pop();
  }

  render() {
    const {navigator, currentRoute} = this.props;
    const isMainView = navigator.getCurrentRoutes().length === 1;

    const backButton = isMainView ?
      <Image source={require('image!menu-icon')} style={style.menuIcon} /> :
      <Text style={style.menuLink}>{msg('buttons.back')}</Text>;

    const navbarStyle = [style.container];
    if (currentRoute.hideNavbar)
      navbarStyle.push(style.containerHidden);

    return (
      <View style={navbarStyle}>

        {!currentRoute.hideBackButton && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={_ => this.handleBackButtonClick(isMainView)}>
              {backButton}
          </TouchableOpacity>
        )}

        <Text style={style.header}>{currentRoute.title}</Text>
      </View>
    );
  }

}

Header.propTypes = {
  currentRoute: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
  toggleMenu: React.PropTypes.func.isRequired
};

export default Header;
