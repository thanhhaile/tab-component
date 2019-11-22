import React from 'react';

const TabContent = (props) => {
  console.log('tab content', props.children)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default TabContent;