import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-19t6g7jz.us.auth0.com"
    clientId="LDPj8znaIz5dcoEwuVgHzrxcA7uPUxhE"
    redirectUri='https://disney-plus-three.vercel.app/'
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
