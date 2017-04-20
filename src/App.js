import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import Personal from './components/Personal';
import Attributes from './components/Attributes';
import Skills from './components/Skills';
import Weapons from './components/Weapons';
import Equipment from './components/Equipment';
import Money from './components/Money';


class App extends Component {
  render() {
    const { character } = this.props;
    return (
      <Provider character={ character }>
        <div className="App">
          <Personal />
          <Attributes />
          <Skills />
          <Weapons />
          <Equipment />
          <Money />
        </div>
      </Provider>
    );
  }
}

export default App;
