import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterProvider } from './context/register.user.context';
import { AuthProvider } from './context/authentication.context';
import { PostProvider } from './context/post.context';
import { ProfileProvider } from './context/profile.context';
import { PhotoProvider } from './context/photo.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <AuthProvider>
          <PostProvider>
            <ProfileProvider>
              <PhotoProvider>
                <Routes>
                  <Route path='/*' element={<App />} />
                </Routes>
              </PhotoProvider>
            </ProfileProvider>
          </PostProvider>
        </AuthProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
