import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const charactersNodes = document.querySelectorAll('.js-character');

charactersNodes.forEach( node => {
    const characterString = node.querySelector('script').innerText;
    const character = JSON.parse(characterString);
    ReactDOM.render(
      <App character={ character }/>,
      node
    )
}
)


