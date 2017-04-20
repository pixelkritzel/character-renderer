import React, { Component } from 'react';
import { inject } from 'mobx-react';

import KeyValueList from './KeyValueList';

class Attributes extends Component {
  render() {
    const { attributes } = this.props.character;
    return(
      <div>
        <strong>Eigenschaften</strong>
        <KeyValueList list={ attributes } />
      </div>
    )
  }
}

export default inject('character')(Attributes);