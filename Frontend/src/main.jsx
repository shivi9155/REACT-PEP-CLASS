import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext.jsx'
// import { StrictMode } from 'react';
import {Provider} from 'react-redux'
import Store from './Redux/Store/Store.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider />
    <Provider store={Store}>
      <App/>
    </Provider>
    <CartProvider/>
  </StrictMode>,
);