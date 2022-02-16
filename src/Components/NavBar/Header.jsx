/* eslint-disable react/style-prop-object */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-screen shado-md py-6 px-3 ">
      <div className="flex container mx-auto">
        <div className="row">
          <div className="col">
            <p className="title-logo">Travel Time</p>
            <a className="navbar-brand" href="./">
              <img
                id="logo"
                src="world.gif"
                alt=""
                width="90"
                height="90"
                className="rounded float-center"
              />
            </a>
          </div>

          <div className="col">
            <p className="welcome-text">
              Hi traveler! You can compare the countries for your next
              destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
