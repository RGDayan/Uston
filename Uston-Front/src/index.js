import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {QueryClient, QueryClientProvider} from "react-query";

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </QueryClientProvider>,
    document.getElementById('root')
);