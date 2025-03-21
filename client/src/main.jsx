import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css'

import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Buying from './pages/Buying.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Selling from './pages/Selling.jsx';
import ErrorPage from './pages/Error.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'aboutme', element: <AboutMe /> },
      { path: 'buying', element: <Buying /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'selling', element: <Selling /> },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('No root element found');
}
