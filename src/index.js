import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterProvider } from './context/register.user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
