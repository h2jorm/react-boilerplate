import React from 'react';
import {restful} from '../../utils/index';

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }
  componentDidMount() {
    restful.model('todo').one('1234').get()
    .then(({title, content}) => {
      this.setState({title, content});
    });
  }
  render() {
    return (
      <div>
        <p>title: {this.state.title}</p>
        <p>content: {this.state.content}</p>
      </div>
    );
  }
}
