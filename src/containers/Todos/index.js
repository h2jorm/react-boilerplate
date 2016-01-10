import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/index';

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    this.props.initTodos();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(({id, title, content}) =>
            <li key={id}>
              <span>{title}</span>
              <span> - </span>
              <span>{content}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      todos: state.todoApp.todos
    }
  },
  dispatch => ({
    initTodos: () => {
      return dispatch(actions.todoAppInit);
    },
  })
)(Todos);
