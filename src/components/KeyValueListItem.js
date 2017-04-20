import React, { Component } from 'react';
import { inject } from 'mobx-react';

class KeyValueListItem extends Component {
  render() {
    const { item } = this.props;
    return(
      <li>
        <strong>{ item.key }</strong>:
        { ' ' }
        { item.value }
      </li>
    )
  }
}

export default KeyValueListItem;