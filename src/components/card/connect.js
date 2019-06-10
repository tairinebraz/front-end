import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

const MapStateToProps = (state, own) => {
    return {

    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route)
}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
