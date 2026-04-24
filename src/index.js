import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './components/FavoriteColor';
import Timer from './components/Timer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <FavoriteColor/>
    <Timer/>
  </>
);

reportWebVitals();
