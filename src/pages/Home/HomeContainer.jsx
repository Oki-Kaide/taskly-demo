import React from "react";
import Home from "./Home";
import ProtonSDK from "../../utils/proton";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
    };
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
    /* istanbul ignore next */
    document.addEventListener("backToSelector", () => {
      this.generateLoginRequest();
    });
  }

  updateWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  /* istanbul ignore next */
  generateLoginRequest = async () => {
    const { setLoggedInState, setErrorState } = this.props;
    const { auth, accountData, error } = await ProtonSDK.login();
    if (error) {
      setErrorState(error);
      return;
    }
    if (!auth || !auth.actor || !auth.permission) {
      return;
    }
      
    setLoggedInState(auth.actor, auth.permission, accountData);
  };

  render() {
    const { windowWidth } = this.state;
    const { error } = this.props;

    return (
      <Home
        openLoginModal={this.generateLoginRequest}
        windowWidth={windowWidth}
        error={error}
      />
    );
  }
}

export default HomeContainer;
