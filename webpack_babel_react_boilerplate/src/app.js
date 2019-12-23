import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

// const template = React.createElement('p', {}, 'Hello from react');
const template = <p>Hello from react</p>;

ReactDOM.render(template, document.getElementById('root'));