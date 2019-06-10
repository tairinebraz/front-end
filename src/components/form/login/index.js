import React from 'react'
import style from './loginform.module.css'
import { Link  } from 'react-router-dom'

import Switch from '../../switch'

import connect from './connect'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            senha: '',
            isEmployee: false,
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeSenha = this.handleChangeSenha.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
    }

    handleSwitch(value) {
        this.setState({ isEmployee: value })
    }

    handleChangeEmail(event) {

        this.setState({
            email: event.target.value
        })
    }

    handleChangeSenha(event) {

        this.setState({
            senha: event.target.value
        })
    }

    handleLogin() {
        this.props.login(this.state.email, this.state.senha, this.state.isEmployee)
    }

    render() {
        return (
            <div className={style.box}>
                <h5 className={style.title}>Entrar</h5>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email" onChange={this.handleChangeEmail} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha" onChange={this.handleChangeSenha} />
                </div>
                <div className="form-group">
                   <Switch handleSwitch={this.handleSwitch} children={'Sou funcionário da BookStore'} />
                </div>
                <div className="form-group">
                   <span>Não possui cadastro ? <Link to={'/cadastrar-agora'}>Cadastrar agora</Link></span>
                </div>
                <div className="form-group">
                    <span>Esqueceu seu login ? <Link to={'/alterar-senha'}>Alterar senha</Link></span>
                </div>
                <button type="button" onClick={this.handleLogin} className="btn btn-primary">Entrar</button>
            </div>
        )
    }
}

export default connect(LoginForm)
