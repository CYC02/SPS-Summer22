import React from 'react';
import logoPlaceholder from './images/logoPlaceholder.png'
class SideNav extends React.Component{
  render(){
    return(
      <>
      <div className="sideNav">
        <img src={logoPlaceholder} alt="logoPlaceholder" width="150px" height="150px"/>
        <nav>
          <a href="#">Create Routine</a>
          <a href="#">Endurance</a>
          <a href="#">Resistance</a>
          <a href="#">Flexibility</a>
          <a href="#">Balance</a>
        </nav>
      </div>
      </>
    );
  }
}

export default SideNav;
