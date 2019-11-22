import React from 'react';

const Tab = (props) => {
  console.log('tab', props.children);
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Tab;