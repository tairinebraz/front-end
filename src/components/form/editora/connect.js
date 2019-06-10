import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapStateToProps = (state) => {

    return {
        employee: state.userLogged.employee,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
