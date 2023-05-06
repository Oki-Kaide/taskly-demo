import React from 'react';
import { LoggedInLayout, RedButton } from '../../components';
import PlusIcon from './PlusIcon';
import './Tasks.sass';

const Tasks = ({accountData, logout}) => {
  return (
    <LoggedInLayout mainImageUrl="./images/smiling-man-bust.png" avatar={accountData.avatar} logout={logout}>
      <h1>
        Thanks, now let's get started!
      </h1>
      <div className="description">
        What can we help you with? Add the tasks below that you would like help with.
      </div>
      <input className="task-item" placeholder="New Task"></input>
      <div className="description add-task">
        <span>Add another task</span>
        <PlusIcon />
      </div>
      <RedButton text="Finish" className="finish-button" />
    </LoggedInLayout>
  );
}

export default Tasks;