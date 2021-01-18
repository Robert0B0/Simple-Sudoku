import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sudoku from './sudoku-files/sudoku.js';


ReactDOM.render(
  <React.StrictMode>
    <Sudoku />
  </React.StrictMode>,
  document.getElementById('root')
);

