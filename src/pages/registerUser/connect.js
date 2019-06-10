import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router';

const MapStateToProps = (state) => {

    return {
        userLogged: state.userLogged.user,
        employee: state.userLogged.employee,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
