import React from 'react'
import connect from './connect'
import Sidebar from '../../components/sideBar'
import { menus_usuarios } from '../../utils/constants'
import style from './area.module.css'

class AreaLogada extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {

        if (!nextProps.userLogged) {
            nextProps.redirect('/')
        }

        return null
    }

    renderName() {

        if (this.props.userLogged) {
            return this.props.userLogged.nome
        }

        return ''
    }

    render() {

        return (
            <div className={'container-fluid'}>
                <div className={style.row}>
                    <Sidebar menus={menus_usuarios} />
                    <div className={'col-md-9'}>

                        <div className={style.jumbotron}>
                            <div className="jumbotron">
                                <h1 className="display-4">Olá, {this.renderName()}</h1>
                                <p className="lead">Essa é a parte do sistema reservada para você.</p>
                                <hr className="my-4" />
                                <p>Nela você pode fazer o controle sobre suas compras.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(AreaLogada)
