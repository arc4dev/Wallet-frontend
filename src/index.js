import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // All general styles first

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
