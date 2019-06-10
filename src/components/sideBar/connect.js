import { connect } from 'react-redux'
import { bindActionCreators } from 'C:/Users/Carlos/AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux';
import { push } from 'connected-react-router';

const MapStateToProps = (state) => {

    return {

    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    redirect: (route) => push(route),

}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
