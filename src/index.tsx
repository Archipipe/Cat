import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <div className="Application">
                        <App />   
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);