import React, { Component } from 'react';
import { inject } from 'mobx-react';

import List from './List';

class Equipment extends Component {
  render() {
    const { equipment } = this.props.character;
    return(
      <div>
        <strong>Ausruestung</strong>
        <List list={ equipment } />
      </div>
    )
  }
}

export default inject('character')(Equipment);