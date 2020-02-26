import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export function ExamChart() {
    const options={
        chart: {
            type: 'areaspline',
            width:'300',
            height:'150',
            borderRadius:20,
            /*plotBackgroundImage:'https://www.highcharts.com/samples/graphics/skies.jpg',*/
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
            data: [
                1,5,4,9,3,7,15
            ]
        }]
    };
    return(
        <HighchartsReact  highcharts={Highcharts} options={options}/>
    )

}