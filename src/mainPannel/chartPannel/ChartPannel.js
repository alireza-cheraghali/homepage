import React, {useState} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {ExamChart} from "./ExamChart";
import {IncomeChart} from "./IncomeChart";
import {CreditChart} from "./CreditChart";
export function ChartPannel() {
    const [examOption,setExamOption]=useState(7)
    console.log(examOption)
    return(
        <div  className='panel color-background-sidebar'style={{borderRadius:30}}>
            <div className='space'>
            <div className='columns'>
                        <div className='column is-flex-row-start is-6 half-space-right'>
                            <span className='mi-calendar is-size-4'/>
                            <span className='has-text-weight-boldest has-text-black space-right'style={{fontSize:15}}>آمار فعالیت</span>
                        </div>
                        <div className='column is-flex-row-end is-6 m--position-relative'>
                            <span className='mi-arrow-down is-flex-row-end half-space-right arrow-position'/>
                            <select className='button chartbutton color-background-sidebar is-flex-row-center'style={{marginLeft:36}} onChange={(e)=>setExamOption(e.target.value)}>
                                <option value={7}>هفتگی</option>
                                <option value={1}>روزانه</option>
                                <option value={365}>سالانه</option>
                            </select>
                        </div>
                </div>
            <div className='columns'>
                <div className='column'style={{position:"relative"}}>
                    <span><ExamChart/></span>
                    <span className='mi-like icon-style'/>
                </div>
                <div className='column'><IncomeChart examOption={examOption}/></div>
                <div className='column'><CreditChart examOption={examOption}/></div>
            </div>
            </div>
        </div>
    )
}