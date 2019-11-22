import React, { useState } from 'react';

const Tabs = ({children}) => {

  // console.log('tabs', children)
  const [ activeTab, setActiveTab ] = useState(children[0].props.children[0].props.children);
  
  const menu = children[0];
  const content = children.slice(1, children.length);


  console.log('activeTab', activeTab)

  const changeActive = (label) => {
    setActiveTab(label);
  }

  return (
    <div>
      {menu}
      {content}

    </div>
  );
};

export default Tabs;