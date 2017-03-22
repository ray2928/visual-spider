import React from 'react';

import {render} from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {Provider} from 'react-redux';
import store, {history} from './store';

import App from './components/App';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'));
