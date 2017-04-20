import React, { Component } from 'react';
import { inject } from 'mobx-react';

import KeyValueListItem from './KeyValueListItem';

class KeyValueList extends Component {
  render() {
    const { list } = this.props;
    return(
      <ul>
        { list.map( item => <KeyValueListItem key={ item.key } item={ item } /> ) }
      </ul>
    )
  }
}

export default KeyValueList;