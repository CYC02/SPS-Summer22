import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';

import TopNav from './TopNav.js';
import WelcomePage from './WelcomePage.js';
import CalendarPage from './CalendarPage.js';

class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<TopNav />}>
                <Route index element={<WelcomePage />} />
                <Route path="calendar" element={<CalendarPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
