import React from 'react';
import { render } from 'react-dom';
import App from './App';
import router from './routes'
// render(
//   <App />,
//   document.getElementById('root')
// );

render(router, document.getElementById('root'));