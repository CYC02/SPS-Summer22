import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import CalendarPage from './components/CalendarPage.js';
import '../src/style.css';
//renders HTML for index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
