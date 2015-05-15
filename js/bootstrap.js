import React from 'react';
import {Hangman} from './components.jsx!';

const el = document.getElementById('container');

React.render(React.createElement(Hangman, {
    answer: 'banana'
}), el);
