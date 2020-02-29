import React, {createContext, useEffect, useState} from "react";
import {ExamChart} from "./ExamChart";
import {IncomeChart} from "./IncomeChart";
import {CreditChart} from "./CreditChart";
import axios from 'axios';
export var sendDataToChart=createContext();
export function ChartPannel() {
    let [examOption,setExamOption]=useState('');
    let [numbers,setNumbers]=useState([]);
    var createRandomNumber=()=>{
        for (let i=0;i<examOption;i++){
            setNumbers([...numbers,numbers[i]=Math.random()*10+1])
        }
        console.log(numbers)
    };
    var show=()=>{
     console.log(examOption)
    }
    useEffect(()=>{createRandomNumber(7)},[])
    return(
        <div  className='panel color-background-sidebar'style={{borderRadius:30}}>
            <div className='space'>
            <div className='columns is-flex'>
                        <div className='column is-flex-row-start is-6 half-space-right'>
                            <span className='mi-calendar is-size-4'/>
                            <span className='has-text-weight-boldest has-text-black space-right'style={{fontSize:15}}>آمار فعالیت</span>
                            <button onClick={show}>s</button>
                        </div>
                        <div className='column is-flex-row-end is-6 m--position-relative'>
                            <span className='mi-arrow-down is-flex-row-end half-space-right arrow-position'/>
                            <select className='button chartbutton color-background-sidebar is-flex-row-center'
                                    style={{marginLeft:12}}
                                    onChange={(e)=>{setExamOption(e.currentTarget.value);createRandomNumber()}}>
                                <option>نوع درخواست را انتخاب کنید </option>
                                <option value={7}>هفتگی</option>
                                <option value={24}>روزانه</option>
                                <option value={12}>سالانه</option>
                            </select>
                        </div>
                </div>
            <div className='columns'>
                <div className='column'style={{position:"relative"}}>
                    <div className='is-flex-row-center'>
                        <sendDataToChart.Provider value={numbers}>
                        <ExamChart/>
                        </sendDataToChart.Provider>
                    </div>
                    <span className='mi-like icon-style'/>
                </div>
                <div className='column is-flex-row-center'>
                    <sendDataToChart.Provider value={numbers}>
                        <IncomeChart/>
                    </sendDataToChart.Provider>
                </div>
                <div className='column is-flex-row-center'>
                    <sendDataToChart.Provider value={numbers}>
                        <CreditChart examOption={examOption}/>
                    </sendDataToChart.Provider>
                    </div>
            </div>
            </div>
        </div>
    )
}