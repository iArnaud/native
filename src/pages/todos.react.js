import Component from '../components/component.react';
import immutable from 'immutable';
import List from '../todos/list.react';
import NewTodo from '../todos/newtodo.react';
import React from 'react-native';
import {
  View
} from 'react-native';

import {container} from '../app/app.style';

class Todos extends Component {

  render() {
    const {todos, pendingActions, navigation} = this.props;

    return (
      <View style={container}>
        <NewTodo todo={todos.get('newTodo')} />
        <List
          editables={todos.get('editables')}
          pendingActions={pendingActions}
          todos={todos.get('list')}
        />
      </View>
    );
  }

}

Todos.propTypes = {
  navigation: React.PropTypes.object.isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  todos: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Todos;
