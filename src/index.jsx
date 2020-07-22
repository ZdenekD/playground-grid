import React from 'react';
import {render} from 'react-dom';
import loadable from '@loadable/component';
import './index.css';

const app = document.getElementById('js_main');

const App = loadable(() => import(/* webpackPrefetch: true */ './components/app'));

if (app) {
    render(
        <App />,
        app
    );
} else {
    console.log('There\'s no application element');
}

console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');
