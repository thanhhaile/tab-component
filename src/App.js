import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import TabMenu from './components/TabMenu/TabMenu';
import Tab from './components/Tab/Tab';
import TabContent from './components/TabContent/TabContent';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabMenu>
          <Tab>tab1</Tab>
          <Tab>tab2</Tab>
          <Tab>tab3</Tab>
        </TabMenu>

        <TabContent>
          <p>Noi dung tab 1</p>
        </TabContent>
        <TabContent>
          <p>Noi dung tab 2</p>
        </TabContent>
        <TabContent>
          <p>Noi dung tab 3</p>
        </TabContent>
      </Tabs>
    </div>
  );
}

export default App;
