import React from 'react';
import ReactEcharts from 'echarts-for-react';

const TencentChartAPIComponent = React.createClass({
    propTypes: {
    },
    getOtion: function() {
        const option = {
            title: {
                text: '饼图',
                subtext: '技术分布'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['Java','C++','Python','Groovy','Swift']
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    left: '10%',
                    width: '80%',
                    label: {
                        normal: {
                            formatter: '{b}'
                        },
                        emphasis: {
                            position:'inside',
                            formatter: '{b}: {c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.7
                        }
                    },
                    data: [
                        {value: 60, name: 'Java'},
                        {value: 40, name: 'C++'},
                        {value: 20, name: 'Python'},
                        {value: 80, name: 'Groovy'},
                        {value: 100, name: 'Swift'}
                    ]
                }
            ]
        };

        return option;
    },
    render: function() {
        return (
            <div className='examples'>
                <div className='parent'>
                    <ReactEcharts ref='echarts_react' option={this.getOtion()}  />
                </div>
            </div>
        );
    }
});

export default TencentChartAPIComponent;