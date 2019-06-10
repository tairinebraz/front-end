import { carrinhoActions } from "../actions/carrinho";
import { includes } from 'lodash'

const initialState = {
    carrinho: [],
}

export default (state = initialState, action) => {

    switch (action) {

        case carrinhoActions.ADD:
            const carrinho = !includes(state.carrinho, action.payload) ? state.carrinho.push(action.payload) : state.carrinho
            return {...state, carrinho }

        default:
            return state
    }
}
