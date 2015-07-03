import Component from '../components/component.react';
import {msg} from '../intl/store';
import React from 'react-native';
import {
  Text,
  View
} from 'react-native';

import style from './todoheader.style';

class TodoHeader extends Component {

  render() {
    const {leftTodos} = this.props;
    const headingMessage = leftTodos
      ? (leftTodos > 1 ? 'todos.todos' : 'todos.oneTodo')
      : 'todos.emptyListHeading';

    return (
      <View style={style.container}>
        <Text style={style.header}>
          {msg(headingMessage, {size: leftTodos})}
        </Text>
      </View>
    );
  }

}

TodoHeader.propTypes = {
  leftTodos: React.PropTypes.number
};

export default TodoHeader;
