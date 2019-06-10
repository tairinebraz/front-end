import { userLoggedActions } from "../actions/userLogged"

const initialState = {
    user: null,
    employeer: null,
}

export default (state = initialState, action) => {

    switch (action.type) {

        case userLoggedActions.LOGIN:
            return { ...state, user: action.payload, employee: null }

        case userLoggedActions.LOGIN_EMPLOYEE:
            return { ...state, user: null, employee: action.payload }

        case userLoggedActions.LOGOUT:
            return { ...state, user: action.payload, employee: action.payload}

        default:
            return state
    }
}
