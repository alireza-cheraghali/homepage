import React from 'react';
import './MONTA.CSS'
import {SideBar} from './sideBar/SideBar'
import {MainPannel} from "./mainPannel/MainPannel";
import {SideBarMobile} from "./sideBar/SideBarMobile";
function App() {
  return (
    <div style={{position:"relative"}}>
        <SideBarMobile/>
      <SideBar/>
      <MainPannel/>
    </div>
  );
}

export default App;
