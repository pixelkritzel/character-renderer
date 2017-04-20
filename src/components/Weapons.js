import React, { Component } from 'react';
import { inject } from 'mobx-react';

import List from './List';

class Weapons extends Component {
  render() {
    const { weapons } = this.props.character;
    return(
      <div>
        <strong>Waffen</strong>
        <List list={ weapons } />
      </div>
    )
  }
}

export default inject('character')(Weapons);