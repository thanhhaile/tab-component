import React from 'react';

const TabMenu = (props) => {
  console.log('menu', props.children);
  return (
    <div>
      {props.children}
    </div>
  )
}

export default TabMenu;