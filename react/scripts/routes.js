import React from 'react';
import { Router, Route, Redirect } from 'react-router';

// import App from './components/App';
// import NoMatch from './components/NoMatch';
// import WordCloudChart from './components/WordCloudChart';
// import App from './App';
import App from './components/test';

// /Users/ruixie/myprojects/visual-spider/react/scripts/components
var router = (
    <Router>
        <Route path="/" component={App}>

        </Route>
    </Router>
);

export default router;
