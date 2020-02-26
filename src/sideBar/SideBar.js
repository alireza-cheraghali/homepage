import React, {useContext} from "react";
import {NameAndImage} from "./NameAndImage";
import '../myCss.css'
import {IconsPannel} from "./IconsPannel";
export function SideBar() {
    return(
        <div style={{width:415,height:1080,position:"absolute",right:0}} className='color-background-sidebar'>
            <div style={{marginRight:30}}>
            <NameAndImage />
            <IconsPannel/>
            </div>
        </div>
    )
}