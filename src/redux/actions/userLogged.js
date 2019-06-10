import axios from "axios"

const URL = 'http://localhost:3005/api/usuario'

export const userLoggedActions = {

    LOGIN: 'LOGIN',
    LOGIN_EMPLOYEE: 'LOGIN_EMPLOYEE',
    LOGOUT: 'LOGOUT',
}

export const login = (email, senha, isEmployee) => {

    return async dispatch => {

        const login = {
            email,
            senha,
            isEmployee,
        }

        const result = await axios.post(`${URL}/login`, JSON.stringify({ login }), {
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            }
        })
            .then((response) => response.data.resultado)

        if (result) {

            if (result.isEmployee) {
                dispatch({
                    type: userLoggedActions.LOGIN_EMPLOYEE,
                    payload: result
                })
            }
            else {
                dispatch({
                    type: userLoggedActions.LOGIN,
                    payload: result
                })
            }
        }
    }
}

export const logout = () => {

    return dispatch => {
        dispatch({
            type: userLoggedActions.LOGOUT,
            payload: null,
        })
    }
}

export const registerUser = (usuario) => {

    return async dispatch => {

        const result = await axios.post(`${URL}/`, JSON.stringify({ usuario }), {
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            }
        })
            .then((response) => response.data.resultado)

        if (result) {

            dispatch({
                type: userLoggedActions.LOGIN,
                payload: result
            })
        }
    }
}
