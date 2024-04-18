import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';
import App from './index';
import reportWebVitals from './reportWebVitals';
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home/>);

reportWebVitals();