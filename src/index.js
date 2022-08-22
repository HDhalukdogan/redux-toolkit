import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/components/App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='container'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);

