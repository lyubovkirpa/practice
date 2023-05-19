import { Component } from 'react';
import { data } from '../data/users';

export class App extends Component {
  state = {
    users: data,
  };

  render() {
    return <div></div>;
  }
}
