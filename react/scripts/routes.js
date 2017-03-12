import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import TencentChartAPIAjaxComponent from './components/charts/TencentPieChartAjaxComponent';
// import DynamicChartComponent from './components/charts/DynamicChartComponent';
var router = (
    <Router>
        <Route path="/" component={TencentChartAPIAjaxComponent}>
        </Route>
    </Router>
);

export default router;
