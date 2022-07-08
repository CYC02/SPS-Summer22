import React from 'react';
import {Outlet, Link} from "react-router-dom";
import logoPlaceholder from './images/logoPlaceholder.png'
class TopNav extends React.Component{
  render(){
    return(
      <>
      <div className="topNav">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logoPlaceholder} alt="logoPlaceholder" width="50px" height="50px" />
              </Link>
            </li>
            <li>
              <a href="#" >User Preferences</a>
            </li>
            <li>
              <Link to="/calendar">Create Routine</Link>
            </li>
            <li>
              <a href="#" >Chest</a>
            </li>
            <li>
              <a href="#" >Arms</a>
            </li>
            <li>
              <a href="#" >Legs</a>
            </li>
            <li>
              <a href="#" >Abdomen</a>
            </li>
          </ul>
        </nav>
        </div>
        <Outlet />

      </>
    );
  }
}

export default TopNav;
