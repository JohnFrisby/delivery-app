import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry";
import BooksService from "./services/books-service";
import { BooksServiceProvider } from "./components/books-service-context";
import store from "./store";

const booksService = new BooksService ();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BooksServiceProvider value={booksService}>
                <Router>
                    <App />
                </Router>
            </BooksServiceProvider>
        </ErrorBoundry>
    </Provider>,
    );