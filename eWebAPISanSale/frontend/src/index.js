import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './pages/DashBoard/Dashboard';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
