import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import carrinho from './carrinho'
import produto from './produto'
import autor from './autor'
import editora from './editora'
import userLogged from './userLogged'

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    carrinho,
    produto,
    userLogged,
    autor,
    editora,
})

export default reducers
