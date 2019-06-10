import { autoresActions } from "../actions/autores"

const initialState = {
    autores: [],
}

export default (state = initialState, action) => {

    switch (action.type) {

        case autoresActions.GET_ALL_AUTORES:
            return { ...state, autores: action.payload }

        case autoresActions.LAST_ID:
            return { ...state, last_id: action.payload }

        default:
            return state
    }
}
