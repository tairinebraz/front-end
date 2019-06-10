import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllAutores } from '../../../redux/actions/autores'
import { getAllEditoras } from '../../../redux/actions/editoras'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
        editoras: state.editora.editoras,
        autores: state.autor.autores,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    getAllAutores,
    getAllEditoras,

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
