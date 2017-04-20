import React, { Component } from 'react';
import { inject } from 'mobx-react';

import ListItem from './ListItem';

class List extends Component {
  render() {
    const { list } = this.props;
    return(
      <ul>
        { list.map( (item, index) => <ListItem key={ index } item={ item } /> ) }
      </ul>
    )
  }
}

export default List;