import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ScrollToTop/>
    <App />
    </ThemeProvider>
  </BrowserRouter>
);

