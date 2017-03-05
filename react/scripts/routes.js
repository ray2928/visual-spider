import React from 'react';
import { Router, Route, Redirect } from 'react-router';

// import App from './components/App';
// import NoMatch from './components/NoMatch';
// import WordCloudChart from './components/WordCloudChart';
// import App from './App';
import App from './components/test';
import ChartAPIComponent from './components/charts/ChartAPIComponent';

var router = (
    <Router>
        <Route path="/" component={ChartAPIComponent}>
        </Route>
    </Router>
);

export default router;
