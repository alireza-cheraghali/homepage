import React from "react";
import {NameAndImage} from "./NameAndImage";
import '../myCss.css'
import {IconsPannel} from "./IconsPannel";
import {Navbar} from "./Navbar";
export function SideBar() {
    return(
        <div style={{width:"min-content",height:1080,position:"absolute",right:0}} className='color-background-sidebar is-hidden-mobile'>
            <div style={{marginRight:30}}>
            <NameAndImage />
            <IconsPannel/>
            <Navbar/>
            </div>
        </div>
    )
}