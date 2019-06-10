import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { searchHomeProdutos } from '../../redux/actions/produtos';

const MapStateToProps = (state) => {

    return {

        produtos: state.produto.produtos_home,
    }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({

    findProdutos: searchHomeProdutos,
    changePage: () => push('/about-us')
}, dispatch)

export default (Component) => connect(MapStateToProps, MapDispatchToProps)(Component)
