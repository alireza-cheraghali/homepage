import React, {createContext, useContext, useEffect, useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {sendDataToChart} from './ChartPannel'
import axios from 'axios'
export function ExamChart() {
    var giveDataFromChart=useContext(sendDataToChart)
    /*var [number,setnumber]=useState();
    useEffect(()=>{
        axios.get('http://localhost:3001/chart').then(res=>{
            const response=res.data.Numbers;
            console.log(response);
            setnumber(response)
        });
    },[]);*/

    const options={
        chart: {
            type: 'areaspline',
            width:'330',
            height:'150',
            borderRadius:20,
            style:{
                zIndex:0
            },
                backgroundColor: {
                linearGradient: [114],
                stops: [
                    [0, '#41DC4E'],
                    [1, '#01B938 '],
                ],
            },
        },
        title:{
            useHTML:true,
            text:'<div><span style="font-size: 12px">آزمون</span><br/><span class="has-text-weight-boldest">23</span></div>',
            align: 'right',
            style:{
                color:'white',
                fontFamily:''
            }
        },
        xAxis:{
            visible: false,
        },
        yAxis:{
            visible: false,
        },
        plotOptions: {
            style:{
                zIndex:2
            },
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            showInLegend:false,
            color:'white',
            data: giveDataFromChart,
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 425
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    };
    return(
        <div >
        <HighchartsReact  highcharts={Highcharts} options={options}/>

        </div>
    )

}