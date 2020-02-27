import React, {useState} from "react";
export function BottomMiddlePannel() {
    var [num,setNum]=useState([]);
    for (let i=0;i<10;i++){
        var createNumber=Math.random()*100+1;
        num=[...num,createNumber];
    }
    return(
        <div>
        </div>
    )
}