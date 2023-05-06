import React from 'react';
import CheckIcon from './CheckIcon';
import './CompletedTask.sass'

const CompletedTask = ({text}) => {
  return (
    <div className="completed-task">
      <CheckIcon />
      <span>{text}</span>
    </div>
  )
}

export default CompletedTask;