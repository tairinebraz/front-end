import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../../../redux/actions/userLogged'
import { push } from 'connected-react-router';

const MapStateToProps = (state) => {

    return {
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    registerUser: registerUser,
    redirect: (route) => push(route),

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
