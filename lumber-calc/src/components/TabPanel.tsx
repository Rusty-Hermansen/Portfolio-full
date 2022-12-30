import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {FC, FormEvent, ChangeEvent, useState } from 'react';
import CalcPPT from './CalcPPT';
import CalcCost from './CalcCost';
import LumberList from './LumberList';
import 'react-tabs/style/react-tabs.css';

const TabHeader : FC<any> = (): JSX.Element => {

return (
    <div>
        <Tabs>
    <TabList>
      <Tab>Create a Price List</Tab>
      <Tab>Calculate from Price-Per-Thousand</Tab>
      <Tab>Calculate from Cost</Tab>
    </TabList>

    <TabPanel>
        <LumberList/>
    </TabPanel>
    <TabPanel>
      <CalcPPT/>
    </TabPanel>
    <TabPanel>
        <CalcCost/>
    </TabPanel>
  </Tabs>
    </div>
)
}



export default TabHeader;