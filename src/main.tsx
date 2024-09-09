import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './assets/arrow.css';
import { ActiveSectionProvider } from './context/active-section';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <React.StrictMode>
        <ActiveSectionProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ActiveSectionProvider>
      </React.StrictMode>
  );
}
