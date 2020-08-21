import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store/store';
import { Routers } from './containers';
import { Menu } from './components';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Menu />
                <Routers />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);