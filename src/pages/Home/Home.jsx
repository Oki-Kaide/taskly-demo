import React from "react";
import PropTypes from "prop-types";
import { RedButton, RedBackground } from "../../components";
import HamburgerIcon from "./HamburgerIcon";
import "./Home.sass";
import '../../App.sass';

const Home = ({openLoginModal, windowWidth, error}) => {
  return (
    <div className="page">
      <div className="page-wrapper">
        <div className="header">
          <img src="./images/taskly-logo.svg" alt="Taskly" />
          <div className="header-buttons">
            {windowWidth > 700 ? (
              <>
                <div className="header-button-item">Services</div>
                <div className="header-button-item">About Us</div>
                <div className="header-button-item">Contact</div>
              </>
            ) : (
              <HamburgerIcon />
            )}
          </div>
        </div>
        <div className="main">
          <h1>Get a virtual assistant. Organize like never before.</h1>
          <RedButton
            text="Connect with Wallet"
            className="login-button"
            handleOnClick={openLoginModal}
          />
          {error ? <h4 className="error">{error}</h4> : null}
          <div className="app-store-badges">
            <img src="./images/google-badge.png" alt="Download on Google" />
            <img src="./images/apple-badge.png" alt="Download on Apple" />
          </div>
        </div>
        <RedBackground side="right" top="20%" right="-20px">
          <img src="./images/peeps.png" alt="Peeps!" />
        </RedBackground>
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired
}
