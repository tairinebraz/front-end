import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'

import { AppContainer } from 'react-hot-loader'

import store, { history } from './redux/store'

const render = () => {

    return ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>, document.getElementById('root')
    );
}

render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
