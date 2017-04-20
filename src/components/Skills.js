import React, { Component } from 'react';
import { inject } from 'mobx-react';

import KeyValueList from './KeyValueList';

class Skills extends Component {
  render() {
    const { skills } = this.props.character;
    return(
      <div>
        <strong>Talente</strong>
        <KeyValueList list={ skills } />
      </div>
    )
  }
}

export default inject('character')(Skills);