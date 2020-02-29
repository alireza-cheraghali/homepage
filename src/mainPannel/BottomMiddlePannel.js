import React, {useState,useEffect} from "react";
import ali from './Capture.JPG'
export function BottomMiddlePannel() {
    var [num,setNum]=useState([]);
    var createRandomNumber=(number)=>{
        for (let i=0;i<number;i++){
            setNum([...num,num[i]=Math.random()*10])
        }
        console.log(num)
        return <div>
            {num.map((val)=><li>{val}</li>)}
        </div>
    }
    useEffect(()=>{
        createRandomNumber()
    },[])
    return(
        <div className='space-top'>
     {/*       <input onChange={(e)=>setNum([createRandomNumber(e.currentTarget.value)])}/>
            {num.map((val)=><li>{val}</li>)}*/}
            <img src={ali}/>
        </div>
    )
}