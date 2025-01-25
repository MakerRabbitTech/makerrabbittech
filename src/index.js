import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MenuComponent from './App'; // 更名為正確的 MenuComponent
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/makerrabbittech">
    <MenuComponent />
  </BrowserRouter>
);

reportWebVitals();
