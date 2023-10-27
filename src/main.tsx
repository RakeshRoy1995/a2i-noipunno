import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios';

axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('customer_login_auth')}`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
