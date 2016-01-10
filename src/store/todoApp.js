import {restful} from '../utils/index';

const todo = restful.model('todo');

module.exports = {
  name: 'todoApp',
  defaultState: {
    todos: []
  },
  mutation: {
    add: function *() {
      yield type => {
        return todo => ({
          todo, type
        });
      };
      yield (state, action) => {
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            action.todo
          ]
        });
      };
    },
    init: function *() {
      yield type => {
        return dispatch => {
          return todo.getAll().then(todos => {
            return dispatch({type, todos});
          });
        };
      };
      yield (state, action) => {
        return Object.assign({}, state, {
          todos: action.todos
        });
      };
    }
  }
};
