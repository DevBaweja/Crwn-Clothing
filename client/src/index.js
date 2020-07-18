import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate as Persist } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Persist persistor={persistor}>
                <App />
            </Persist>
        </Router>
    </Provider>,
    document.getElementById('root')
);
