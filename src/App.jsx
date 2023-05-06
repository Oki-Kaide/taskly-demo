import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { HomeContainer, AccountContainer, TasksContainer } from './pages';
import ProtonSDK from './utils/proton';
import './App.sass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actor: '',
      permission: '',
      session: '',
      accountData: {},
      error: '',
    };
  }

  componentDidMount = async () => {
    this.checkIfLoggedIn();
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.error) {
      this.setErrorState('');
    }
  }

  checkIfLoggedIn = async () => {
    const { auth, accountData, error } = await ProtonSDK.restoreSession();
    if (error) {
      this.setErrorState(error);
      return;
    }
    if (!auth || !auth.actor || !auth.permission) {
      return;
    }

    this.setLoggedInState(auth.actor, auth.permission, accountData);
  };

  setErrorState = (error) => {
    this.setState({ error });
  };

  setLoggedInState = async (actor, permission, accountData) => {
    this.setState({ actor, permission, accountData });
    if (!window.location.href.includes('/account') && !window.location.href.includes('/tasks')) {
      if (this.isPageHidden()) {
        window.onfocus = this.loadAccountsPage;
      } else {
        this.loadAccountsPage();
      }
    }
  };

  isPageHidden = () => {
    return (
      document.hidden ||
      document.msHidden ||
      document.webkitHidden ||
      document.mozHidden
    );
  };

  loadAccountsPage = () => {
    const { history } = this.props;
    history.push('/account');
    window.onfocus = null;
  };

  isPageHidden = () => {
    return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
  }

  loadAccountsPage = () => {
    const { history } = this.props;
    history.push('/account');
    window.onfocus = null;
  }

  logout = async () => {
    const { accountData } = this.state;
    const { history } = this.props;
    if (accountData && accountData.acc) {
      await ProtonSDK.logout();
      this.setState({ actor: '', accountData: {}, session: '' });
    }

    history.push('/');
  };

  render() {
    const { accountData, actor, permission, error } = this.state;
    const { history, location } = this.props;

    return (
      <Switch>
        <Route
          path='/tasks'
          render={() => (
            <TasksContainer
              accountData={accountData}
              logout={this.logout}
              permission={permission}
              actor={actor}
            />
          )}
        />
        <Route
          path='/account'
          render={() => (
            <AccountContainer
              error={error}
              setErrorState={this.setErrorState}
              location={location}
              accountData={accountData}
              actor={actor}
              permission={permission}
              logout={this.logout}
              history={history}
              isPageHidden={this.isPageHidden}
            />
          )}
        />
        <Route
          path='/'
          render={() => (
            <HomeContainer
              error={error}
              setErrorState={this.setErrorState}
              setLoggedInState={this.setLoggedInState}
            />
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
