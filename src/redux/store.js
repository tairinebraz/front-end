import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import rootReducer from './reducers'

// cria o historico do browser
export const history = createBrowserHistory()
// estado inicial do redux
const initialState = {}

let composeEnhancer = compose

if (process.env.NODE_ENV === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancer(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

// Hot reloading
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer(history));
  });
}


export default store
