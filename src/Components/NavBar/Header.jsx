/* eslint-disable react/style-prop-object */
import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <nav className="navbar navbar-nav navbar-light " >
    <div className='h-100 container-fluid'>
     <div className='container-logo'>
     <p className='title-logo'>Travel Time</p>
     <a className="navbar-brand" href='./'>
        <img id='logo' src="world.gif" alt="" width="90" height = "90" className='rounded float-center'/>
        
      </a>
      
      </div>
      <div className='container'> 
      <p className='welcome-text'>Hi traveler! You can compare the countries for your next destination.</p>
      </div>
    </div>
    </nav>
  )
}

export default Header