import React, {useContext} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {sendDataToChart} from './ChartPannel'
export function IncomeChart() {
    var getDataForChart=useContext(sendDataToChart)
    const options={
        chart: {
            type: 'areaspline',
            width:'330',
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
            data: getDataForChart
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
        <div>
        <HighchartsReact  highcharts={Highcharts} options={options}/>
        </div>
    )

}