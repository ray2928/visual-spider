import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import TencnetChartAPICompoent from './components/charts/TencentPieChartComponent';

var router = (
    <Router>
        <Route path="/" component={TencnetChartAPICompoent}>
        </Route>
    </Router>
);

export default router;
