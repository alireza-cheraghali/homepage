import React, {useContext} from "react";
import {NameAndImage} from "./NameAndImage";
import '../myCss.css'
export function SideBar() {
    return(
        <div style={{width:415,height:1080}}className='color-background-sidebar'>
            <NameAndImage />
        </div>
    )
}