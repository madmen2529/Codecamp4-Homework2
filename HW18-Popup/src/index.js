import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topic1 from './Topic1';
import Topic2 from './Topic2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Topic1 / > , document.getElementById('topic1'));
// ReactDOM.render( < Topic2 / > , document.getElementById('topic2'));

serviceWorker.unregister();