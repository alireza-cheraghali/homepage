import React, {useContext} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {sendDataToChart} from "./ChartPannel";
export function CreditChart() {
    var giveDataFromChart=useContext(sendDataToChart)
    const options={
        chart: {
            type: 'areaspline',
            width:'330',
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
            data: giveDataFromChart
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
        <HighchartsReact  highcharts={Highcharts} options={options}/>
    )

}