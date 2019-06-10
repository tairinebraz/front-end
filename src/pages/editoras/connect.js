import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';
import { getAllEditoras, create, edit, remove } from '../../redux/actions/editoras'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        editoras: state.editora.editoras,
        last_id: state.editora.last_id,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),
    getAllEditoras,
    create,
    edit,
    remove,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
