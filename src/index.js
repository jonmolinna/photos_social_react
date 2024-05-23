import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterProvider } from './context/register.user.context';
import { AuthProvider } from './context/authentication.context';
import { PostProvider } from './context/post.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <AuthProvider>
          <PostProvider>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </PostProvider>
        </AuthProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
