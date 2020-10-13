import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import App from './App';
import ActiveState from './context/active/ActiveState';

ReactDOM.render(
  <React.StrictMode>
    <ActiveState>
      <App />
    </ActiveState>
  </React.StrictMode>,
  document.getElementById('root')
);
