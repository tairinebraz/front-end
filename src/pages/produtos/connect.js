import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';
import { getAllProdutos, create, edit, remove } from '../../redux/actions/produtos'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        produtos: state.produto.produtos,
        last_id: state.produto.last_id,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),
    getAllProdutos: getAllProdutos,
    create,
    edit,
    remove,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
