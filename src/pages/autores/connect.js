import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';
import { getAllAutores, create, edit, remove } from '../../redux/actions/autores'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        autores: state.autor.autores,
        last_id: state.autor.last_id,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),
    getAllAutores,
    create,
    edit,
    remove,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
