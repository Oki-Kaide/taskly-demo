import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';

class TasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { accountData, logout } = this.props;
    return(
      <Tasks accountData={accountData} logout={logout} />
    );
  }
}

TasksContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  accountData: PropTypes.shape().isRequired,
}
export default TasksContainer;