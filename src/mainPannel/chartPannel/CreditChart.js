import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export function CreditChart() {
    const options={
        chart: {
            type: 'areaspline',
            width:'300',
            height:'150',
            borderRadius:20,
            /*plotBackgroundImage:'https://www.highcharts.com/samples/graphics/skies.jpg',*/
            backgroundColor: {
                linearGradient: [113],
                stops: [
                    [0, '#FF64AC'],
                    [1, '#FF0C6F'],
                ],
            },
        },
        title:{
            useHTML:true,
            text:'<div><span style="font-size: 12px">اعتبار</span><br/><span class="has-text-weight-boldest">23</span></div>',
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
                12,14,1,5,2,9,10
            ]
        }]
    };
    return(
        <HighchartsReact  highcharts={Highcharts} options={options}/>
    )

}