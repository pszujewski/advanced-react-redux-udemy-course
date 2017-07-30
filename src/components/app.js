import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className='App-wrap'>
        <Header />
        { this.props.children }
      </div>
    );
  }
}
