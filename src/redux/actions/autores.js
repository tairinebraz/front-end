import axios from 'axios'

const URL = 'http://localhost:3005/api/autor'

export const autoresActions = {

    LAST_ID: 'LAST_ID',
    GET_ALL_AUTORES: 'GET_ALL_AUTORES',
}

export const getAllAutores = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/all`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.autores.length) {

            dispatch({
                type: autoresActions.GET_ALL_AUTORES,
                payload: result.autores
            })
        }
    }
}

export const create = (autor) => {

    return async dispatch => {

        const result =  await axios.post(`${URL}`, JSON.stringify({ autor }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.id) {

            dispatch({
                type: autoresActions.LAST_ID,
                payload: result.id
            })
        }
    }
}

export const edit = (autor) => {

    return async dispatch => {

        const result =  await axios.put(`${URL}`, JSON.stringify({ autor }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllAutores())
        }
    }
}

export const remove = (autor) => {

    return async dispatch => {

        const result = await axios.delete(`${URL}/${autor.id}`)
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllAutores())
        }
    }
}