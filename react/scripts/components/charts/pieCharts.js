import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export class PieReact extends React.Component {

    render() {
        return (
            <div className="pie-react">
                <div ref="pieReact" style={{width: "100%", height: "200px"}}></div>
            </div>
        )
    }
}