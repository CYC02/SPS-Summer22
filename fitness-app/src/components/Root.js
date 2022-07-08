import React from 'react';
import CalendarHead from './CalendarHead.js';
import TopNav from './TopNav.js';
import Welcome from './Welcome.js';

class Root extends React.Component{
  render(){
    return(
      <>
        <TopNav />
        <Welcome />
      </>
    );
  }
}

export default Root;
