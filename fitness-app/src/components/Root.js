import React from 'react';
import CalendarHead from './CalendarHead.js';
import Calendar from './Calendar.js';
import SideNav from './SideNav.js';

class Root extends React.Component{
  render(){
    return(
      <>
        <SideNav />
        <CalendarHead />
      </>
    );
  }
}

export default Root;
