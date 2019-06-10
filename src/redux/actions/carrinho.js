export const carrinhoActions = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    UPDATE: 'UPDATE'
}

export const AddCarrinho = (produto) => {

    return dispatch => {

        dispatch({
            type: carrinhoActions.ADD,
            payload: produto
        })
    }
}