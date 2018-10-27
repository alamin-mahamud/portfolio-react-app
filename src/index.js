// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';
// import '../node_modules/boostrap/dist/css/bootstrap.min.css'

// Containers
// import App from './App';
import routes from './routes';

// libs
import * as serviceWorker from './serviceWorker';

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
