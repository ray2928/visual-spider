import React from 'react';
import { Router, Route, Redirect } from 'react-router';

// import TencentChartAPIAjaxComponent from './components/charts/TencentPieChartAjaxComponent';
// import DynamicChartComponent from './components/charts/DynamicChartComponent';
import {PieReact} from './components/charts/pieReact';
const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
]

var router = (
    <Router>
        <Route path="/" data={data} component={PieReact}>
        </Route>
    </Router>
);

export default router;
