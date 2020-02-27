import React from "react";
import {ChartPannel} from "./chartPannel/ChartPannel";
import {MiddleMainPannel} from "./MiddleMainPannel";
import {BottomMiddlePannel} from "./BottomMiddlePannel";

export function MainPannel() {
    return(
       <div style={{position:"absolute",right:420,width:1060,margin:20,}}>
            <ChartPannel/>
            <MiddleMainPannel/>
            <BottomMiddlePannel/>
       </div>
    )
}