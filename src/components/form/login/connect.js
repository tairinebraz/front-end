import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../../redux/actions/userLogged'

const MapStateToProps = (state) => {

    return {
        userLogged: state.userLogged.user,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    login: login

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
