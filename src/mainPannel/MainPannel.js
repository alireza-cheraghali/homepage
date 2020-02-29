import React from "react";
import {ChartPannel} from "./chartPannel/ChartPannel";
import {MiddleMainPannel} from "./MiddleMainPannel";
import {BottomMiddlePannel} from "./BottomMiddlePannel";

export function MainPannel() {
    return(
       <div className='mainpannel-style' >
            <ChartPannel/>
            <MiddleMainPannel/>
            <BottomMiddlePannel/>
       </div>
    )
}