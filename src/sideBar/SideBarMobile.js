import React, {useState} from "react";
import {SideBar} from "./SideBar";
import {NameAndImage} from "./NameAndImage";
import {IconsPannel} from "./IconsPannel";
import {Navbar} from "./Navbar";
export let show=React.createContext();
export function SideBarMobile() {
    let [clicked,setClicked]=useState(false);
    console.log(clicked)
    return(
        <div className='columns is-hidden-desktop is-flex has-text-black'>
            <div className='column is-flex-row-start'>
                <button className='button'style={{border:0}} onClick={()=>setClicked(!clicked)}>
                <span className='mi-hamburger is-size-4'/>
                </button>
                <div>
                   {/* <show.Provider value={clicked}>
                        <SideBar/>
                    </show.Provider>*/}
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
    )
}