import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

const App = (props) => {
  return (
    <ConnectedRouter history={props.history}>
      { routes }
    </ConnectedRouter>
  )
}

export default App;
