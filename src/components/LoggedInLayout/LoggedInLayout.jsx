import React from 'react';
import PropTypes from 'prop-types';
import { RedBackground } from '../index';
import './LoggedInLayout.sass';

class LoggedInLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
    };
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { children, mainImageUrl, avatar, logout } = this.props;
    const { windowWidth } = this.state;

    return (
      <div className="page">
        <div className="page-wrapper">
          <div className="header">
            {windowWidth > 700 ? (
              <img src="./images/taskly-logo-white.svg" alt="Taskly" />
            ) : (
              <img src="./images/taskly-logo.svg" alt="Taskly" />
            )}
            <div
              style={{
                backgroundImage:
                  avatar !== ""
                    ? `url('data:image/jpeg;base64,${avatar}')`
                    : `url('./images/default-avatar.png')`,
              }}
              alt="avatar"
              className="header-avatar"
              onClick={logout}
            />
          </div>
          <div className="content-wrapper">
            <div className="content">
              {children}
              <RedBackground side="left" bottom="-5px">
                <img
                  src={mainImageUrl}
                  alt="Smiling"
                  className="account-image"
                />
              </RedBackground>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedInLayout;

LoggedInLayout.propTypes = {
  avatar: PropTypes.string,
  openConfirmModal: PropTypes.func,
  logout: PropTypes.func.isRequired,
};

LoggedInLayout.defaultProps = {
  avatar: '',
  openConfirmModal: null,
};
