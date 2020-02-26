import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export function IncomeChart() {
    const options={
        chart: {
            type: 'areaspline',
            width:'300',
            height:'150',
            borderRadius:20,
            /*plotBackgroundImage:'https://www.highcharts.com/samples/graphics/skies.jpg',*/
            backgroundColor: {
                linearGradient: [133],
                stops: [
                    [0, '#A061FF '],
                    [1, '#7406F3 '],
                ],
            },
        },
        title:{
            useHTML:true,
            text:'<div class="space-right"><span style="font-size: 12px">درآمد (تومان)</span><br/><span class="has-text-weight-boldest">450,837</span></div>',
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
                9,2,1,24,2,8,7
            ]
        }]
    };
    return(
        <HighchartsReact  highcharts={Highcharts} options={options}/>
    )

}