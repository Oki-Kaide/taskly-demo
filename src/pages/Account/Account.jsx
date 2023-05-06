import React from 'react';
import PropTypes from 'prop-types';
import { RedButton, CompletedTask, LoggedInLayout } from '../../components';
import './Account.sass';
import '../../App.sass';

const Account = ({openConfirmModal, completedTasks, accountData, logout, error }) => {
  return (
    <LoggedInLayout mainImageUrl="./images/smiling-girl-bust.png" avatar={accountData.avatar} logout={logout}>
      <h1>
        Welcome back {accountData.name}.
      </h1>
      <div className="description">
        We are proud to say that we have completed all the tasks you requested. If you wish to continue using our service, please purchase another month.
      </div>
      { completedTasks.map((text, index) => (
        <CompletedTask text={text} key={index} />
      ))}
      <RedButton text="1 month of service" text2="5 FOOBAR" className="pay-button" handleOnClick={openConfirmModal} />
      {error ? <h4 className="error">{error}</h4> : null}
    </LoggedInLayout>
  );
}

export default Account;

Account.propTypes = {
  accountData: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
  openConfirmModal: PropTypes.func.isRequired,
  completedTasks: PropTypes.arrayOf(PropTypes.string),
}
