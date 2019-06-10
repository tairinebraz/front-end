import axios from 'axios'

const URL = 'http://localhost:3005/api/produto'

export const produtosActions = {

    SEARCH_HOME: 'SEARCH_HOME',
    ALL_PRODUTOS: 'ALL_PRODUTOS',
    LAST_ID: 'LAST_ID',
}

export const searchHomeProdutos = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/limit/10`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.produtos.length) {

            dispatch({
                type: produtosActions.SEARCH_HOME,
                payload: result.produtos
            })
        }
    }
}

export const getAllProdutos = () => {

    return async dispatch => {

        const result = await axios.get(`${URL}/all`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.data)

        if (result.produtos.length) {

            dispatch({
                type: produtosActions.ALL_PRODUTOS,
                payload: result.produtos
            })
        }
    }
}

export const create = (produto) => {

    return async dispatch => {

        const result =  await axios.post(`${URL}`, JSON.stringify({ produto }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.id) {

            dispatch({
                type: produtosActions.LAST_ID,
                payload: result.id
            })
        }
    }
}

export const edit = (produto) => {

    return async dispatch => {

        const result =  await axios.put(`${URL}`, JSON.stringify({ produto }), {
            headers: {
                'Content-Type': 'Application/json',
            }
        })
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllProdutos())
        }
    }
}

export const remove = (produto) => {

    return async dispatch => {

        const result = await axios.delete(`${URL}/${produto.id}`)
        .then((response) => response.data)

        if (result.resultado) {

            await dispatch(getAllProdutos())
        }
    }
}