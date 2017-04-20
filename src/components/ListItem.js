import React, { Component } from 'react';
import { inject } from 'mobx-react';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return(
      <li>
        { item }
      </li>
    )
  }
}

export default ListItem;