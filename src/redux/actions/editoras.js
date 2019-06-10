import axios from 'axios'

const URL = 'http://localhost:3005/api/editora'

export const editoraActions = {

    GET_ALL_EDITORAS: 'GET_ALL_EDITORAS',
    LAST_ID: 'LAST_ID',
}

export const getAllEditoras = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/all`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.editoras.length) {

            dispatch({
                type: editoraActions.GET_ALL_EDITORAS,
                payload: result.editoras
            })
        }
    }
}

export const create = (editora) => {

    return async dispatch => {

        const result =  await axios.post(`${URL}`, JSON.stringify({ editora }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.id) {

            dispatch({
                type: editoraActions.LAST_ID,
                payload: result.id
            })
        }
    }
}

export const edit = (editora) => {

    return async dispatch => {

        const result =  await axios.put(`${URL}`, JSON.stringify({ editora }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllEditoras())
        }
    }
}

export const remove = (editora) => {

    return async dispatch => {

        const result = await axios.delete(`${URL}/${editora.id}`)
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllEditoras())
        }
    }
}