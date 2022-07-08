import React from 'react';
import logoPlaceholder from './images/logoPlaceholder.png'
class TopNav extends React.Component{
  render(){
    return(
      <>
      <div className="topNav">
        <nav>
          <img src={logoPlaceholder} alt="logoPlaceholder" width="50px" height="50px"/>
          <a href="#" >User Preferences</a>  
          <a href="#" >Create Routine</a>
          <a href="#" >Chest</a>
          <a href="#" >Arms</a>
          <a href="#" >Legs</a>
          <a href="#" >Abdomen</a>
        </nav>
      </div>
      </>
    );
  }
}

export default TopNav;