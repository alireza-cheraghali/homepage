import React, {useState} from 'react';
import './MONTA.CSS'
import {SideBar} from './sideBar/SideBar'
import {MainPannel} from "./mainPannel/MainPannel";
import {show} from "./sideBar/SideBarMobile";
import {NameAndImage} from "./sideBar/NameAndImage";
import {IconsPannel} from "./sideBar/IconsPannel";
import {Navbar} from "./sideBar/Navbar";
function App() {
    let [clicked,setClicked]=useState(false);
  return (
    <div style={{position:"relative"}}>
        <div className='columns is-hidden-desktop is-flex has-text-black is-hidden-desktop'>
            <div className='column is-flex-row-start'>
                <button className='button'style={{border:0}} onClick={()=>setClicked(!clicked)}>
                    <span className='mi-hamburger is-size-4'/>
                </button>
                <div>
                    <show.Provider value={clicked}>
                        <SideBar/>
                    </show.Provider>
                    {clicked === true &&
                    <div className='lolo'>
                        <button className='button space-bottom'style={{border:0}} onClick={()=>setClicked(!clicked)}>
                            <span className='mi-hamburger is-size-4'/>
                        </button>
                        <NameAndImage/>
                        <IconsPannel/>
                        <Navbar/>
                    </div>
                    }
                </div>
            </div>
            <div className='column is-flex-row-center'>مُنتا</div>
            <div className='column is-flex-row-end '>ورود / ثبت نام</div>
        </div>
        <div className={clicked===true ? 'is-hidden-mobile':''}>
            <SideBar/>
            <MainPannel/>
        </div>
    </div>
  );
}

export default App;
