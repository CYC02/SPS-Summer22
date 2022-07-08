import React from 'react';
import ReactDOM from 'react-dom/client';
import CalendarRoot from './components/CalendarRoot.js';
import '../src/style.css';
//renders HTML for createRoutine.html
const root = ReactDOM.createRoot(document.getElementById('calendar-root'));
root.render(<CalendarRoot />);
