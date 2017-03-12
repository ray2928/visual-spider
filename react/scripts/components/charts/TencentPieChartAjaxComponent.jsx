import React from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';

const TencentChartAPIAjaxComponent = React.createClass({
    propTypes: {},
    getInitialState: function () {
        return {option: this.getOption()};
    },
    fetchNewData: function () {
        var languages = [];
        var percentages = [];
        let option = this.state.option;
        $.ajax({
            url: 'http://127.0.0.1:8080/key/getReport',
            dataType: 'json',
            success: function (result) {
                if (result) {
                    for (var i = 0; i < result.languages.length; i++) {
                        languages.push(result["languages"][i]["name"]);
                        percentages.push(result["languages"][i]["percentage"]);
                    }
                    option.xAxis.data = languages;
                    option.series.data = percentages;
                    console.log("渲染完毕..")
                }
            },
            error: function (errorMsg) {
                alert("图表请求数据失败!");
            }
        })
        this.setState({option: option});
    },
    componentDidMount: function () {
        this.fetchNewData()
    },
    componentWillUnmount: function() {
        this.fetchNewData()
    },
    getOption: function () {
        const option = {
            title: {
                text: 'Ajax Example',
                subtext: '技术分布'
            },
            tooltip: {},
            legend: {
                data: ['类别']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [
                {
                    name: '类别',
                    type: 'bar',
                    data: []
                }
            ]
        };
        return option;
    },
    render: function () {
        return (
            <div className='examples'>
                <ReactEcharts ref='echarts_react' option={this.state.option}/>
            </div>
        );
    }
});

export default TencentChartAPIAjaxComponent;