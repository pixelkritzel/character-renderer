import React, { Component } from 'react';
import { inject } from 'mobx-react';

class Money extends Component {
  render() {
    const { money } = this.props.character;
    return(
      <div>
        <strong>Geld</strong>: { money } Kreuzer
      </div>
    )
  }
}

export default inject('character')(Money);