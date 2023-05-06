import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account';
import ProtonSDK from '../../utils/proton';

class AccountContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedTasks: [
        'Filed your tax return',
        'Organized all your contacts',
        'Contact DMV about updating tags',
        'Sent a request to your building manager',
      ],
    };
  }

  /* istanbul ignore next */
  openConfirmModal = async () => {
    const { actor, permission, isPageHidden, setErrorState } = this.props;
    const actions = [
      {
        account: 'xtokens',
        name: 'transfer',
        authorization: [
          {
            actor: actor,
            permission: permission,
          },
        ],
        data: {
          from: actor,
          to: ProtonSDK.requestAccount,
          quantity: '5.000000 FOOBAR',
          memo: 'Taskly',
        },
      },
    ];
    const { processed, error } = await ProtonSDK.sendTransaction(actions);
    if (error) {
      setErrorState(error);
      return;
    }
    if (!processed || !processed.id) {
      return;
    }

    if (isPageHidden()) {
      window.onfocus = this.loadTasksPage;
    } else {
      this.loadTasksPage();
    }
  };

  loadTasksPage = () => {
    const { history } = this.props;
    history.push('/tasks');
    window.onfocus = null;
  };

  loadTasksPage = () => {
    const { history } = this.props;
    history.push('/tasks');
    window.onfocus = null;
  }

  render() {
    const { completedTasks } = this.state;
    const { accountData, logout, error } = this.props;

    return (
      <Account
        openConfirmModal={this.openConfirmModal}
        completedTasks={completedTasks}
        accountData={accountData}
        logout={logout}
        error={error}
      />
    );
  }
}

AccountContainer.propTypes = {
  accountData: PropTypes.shape(),
  permission: PropTypes.string,
  actor: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isPageHidden: PropTypes.func.isRequired,
};

AccountContainer.defaultProps = {
  accountData: {},
  permission: '',
  actor: '',
};

export default AccountContainer;
