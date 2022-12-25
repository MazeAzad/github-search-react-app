import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENT_ID}
    redirectUri='http://127.0.0.1:5173'
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>



)
