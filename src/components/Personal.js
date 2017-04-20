import React, { Component } from 'react';
import { inject } from 'mobx-react';

import KeyValueList from './KeyValueList';

class Personal extends Component {
  render() {
    const { personal } = this.props.character;
    return(
      <div>
        <strong>Zur Person</strong>
        <KeyValueList list={ personal } />
      </div>
    )
  }
}

export default inject('character')(Personal);