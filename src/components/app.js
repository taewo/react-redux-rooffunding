import React, { Component } from 'react';
import Header from './header/header';
import Body from './body/body';
import Section from './body/section';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Section />
      </div>
    );
  }
}

export default App;
