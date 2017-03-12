import React from 'react';
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery';

const TencentChartAPIAjaxComponent = React.createClass({
    propTypes: {},
    // componentDidMount: function () {
    //     var languages = [];
    //     var percentages = [];
    //     $.ajax({
    //         url: 'http://127.0.0.1:8080/key/getReport',
    //         dataType: 'json',
    //         success: function (result) {
    //             if (result) {
    //                 for (var i = 0; i < result.languages.length; i++) {
    //                     languages.push(result["languages"][i]["name"]);
    //                     percentages.push(result["languages"][i]["percentage"]);
    //                 }
    //                 this.setOption({
    //                         xAxis: {
    //                             data: languages
    //                         },
    //                         series: [{
    //                             name: '语言',
    //                             data: percentages
    //                         }]
    //                     }
    //                 );
    //             }
    //         },
    //         error: function (errorMsg) {
    //             alert("图表请求数据失败!");
    //         }
    //     })
    // },
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
                        data: [
                            {value: 60, name: 'Java'},
                            {value: 40, name: 'C++'},
                            {value: 20, name: 'Python'},
                            {value: 80, name: 'Groovy'},
                            {value: 100, name: 'Swift'}
                        ]
                    }
                ]
            }
            ;
        return option;
    },
    render: function () {
        return (
            <div className='examples'>
                <ReactEcharts option={this.getOption()}/>
            </div>
        );
    }
});

export default TencentChartAPIAjaxComponent;