import React from 'react';
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/pie') //图表类型
require('echarts/lib/component/title') //标题插件


let option = {
    title: {
        text: 'ECharts with React'
    },
    grid: {
        show: false
    },
    tooltip: {},
    xAxis: {
        data: ["1990","1991","1992","1993","1994","1995"]
    },
    yAxis: {},
    series: [{
        name: 'Test',
        type: 'pie',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

const Chart = React.createClass({
    componentDidMount: function() {
        this.chart = echarts.init(this.refs.Chart)
        this.chart.showLoading()

        setTimeout(function() {
            this.chart.setOption(option)
            this.chart.hideLoading()
        }.bind(this), 2000)
    },

    render() {
        return (
                <div ref="Chart" className="charts-container"></div>
        )
    }
});
export default Chart;