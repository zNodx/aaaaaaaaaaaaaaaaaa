import React from 'react';
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from 'redux-thunk';
import reducers from './main/reducers'
import AuthOrApp from './main/authOrApp';

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
, document.getElementById('app'))

