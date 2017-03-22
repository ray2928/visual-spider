import React, { Component } from 'react';
// import ReactEcharts from 'echarts-for-react';
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/pie') //图表类型
require('echarts/lib/component/title') //标题插件

import $ from 'jquery';

export class PieReact extends React.Component {

    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPie = this.initPie.bind(this)
    }

    initPie() {
        const data = [
            {value: 1, name: "是"},
            {value: 2, name: "否"}
        ]  //外部传入的data数据
        let myChart = echarts.init(this.refs.pieReact) //初始化echarts
        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data)
        //设置options
        myChart.setOption(options)
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    render() {
        return (
            <div className="pie-react">
                <div ref="pieReact" style={{width: "100%", height: "200px"}}></div>
            </div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
        return {
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data: data, //传入外部的data数据
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '18'
                            },
                            formatter: "{d}% \n{b}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        }
    }
}