import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 110,
    backgroundColor: '#31AACC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Lato-Light'
  },
  menuLink: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 15,
    top: 45,
    opacity: 0.9
  }
});
