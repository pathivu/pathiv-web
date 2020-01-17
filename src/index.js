import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './index.scss';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));