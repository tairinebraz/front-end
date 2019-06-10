import React from 'react'
import connect from './connect'
import Sidebar from '../../components/sideBar'
import { menus } from '../../utils/constants'
import style from './area.module.css'

class AreaFuncionario extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {

        if (!nextProps.employee) {
            nextProps.redirect('/')
        }

        return null
    }

    renderName() {

        if (this.props.employee) {
            return this.props.employee.nome
        }
        return ''
    }

    render() {

        return (
            <div className={'container-fluid'}>
                <div className={style.row}>
                    <Sidebar menus={menus} />
                    <div className={'col-md-9'}>

                        <div className={style.jumbotron}>
                            <div className="jumbotron">
                                <h1 className="display-4">Olá, {this.renderName()}</h1>
                                <p className="lead">Essa é a parte do sistema reservada para os funcionários.</p>
                                <hr className="my-4" />
                                <p>Nela você pode fazer o controle sobre os produtos e as vendas da loja.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(AreaFuncionario)
