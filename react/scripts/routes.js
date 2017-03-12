import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import TencentChartAPIAjaxComponent from './components/charts/TencentPieChartAjaxComponent';
var router = (
    <Router>
        <Route path="/" component={TencentChartAPIAjaxComponent}>
        </Route>
    </Router>
);

export default router;
