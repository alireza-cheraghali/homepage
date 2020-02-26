import React from 'react';
import './MONTA.CSS'
import {SideBar} from './sideBar/SideBar'
import {ChartPannel} from "./mainPannel/ChartPannel";
import {MainPannel} from "./mainPannel/MainPannel";
function App() {
  return (
    <div style={{position:"relative"}}>
      <SideBar/>
      <MainPannel/>
    </div>
  );
}

export default App;
