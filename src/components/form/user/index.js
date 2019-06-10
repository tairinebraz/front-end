import React from 'react'
import style from './user.module.css'
import connect from './connect'

class FormUser extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            senha: '',
            endereco: '',
            cep: '',
            cpf: '',
            nome: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(target, event) {

        switch (target) {

            case 'nome':
                this.setState({ nome: event.target.value })
                break;

            case 'email':
                this.setState({ email: event.target.value })
                break;

            case 'senha':
                this.setState({ senha: event.target.value })
                break;

            case 'endereco':
                this.setState({ endereco: event.target.value })
                break;

            case 'cep':
                this.setState({ cep: event.target.value })
                break;

            case 'cpf':
                this.setState({ cpf: event.target.value })
                break;

            default:
                break;
        }
    }

    handleSubmit() {
        const { nome, email, senha, cep, endereco, cpf } = this.state
        this.props.registerUser({ nome, email, senha, cep, endereco, cpf })
    }

    render() {

        return (
            <div className={style.box}>
                <h5 className={style.title}>Cadastrar</h5>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(event) => this.handleChange('email', event)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(event) => this.handleChange('senha', event)} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Nome</label>
                    <input type="text" className="form-control" id="inputNome" placeholder="Nome" onChange={(event) => this.handleChange('nome', event)} />
                </div>
                <div className="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Endereço" onChange={(event) => this.handleChange('endereco', event)} />
                </div>
                <div className={'form-row'}>
                    <div className="form-group col-md-6">
                        <label for="inputCEP">CEP</label>
                        <input type="text" className="form-control" id="inputCEP" placeholder="CEP" onChange={(event) => this.handleChange('cep', event)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputCPF">CPF</label>
                        <input type="text" className="form-control" id="inputCPF" placeholder="CPF" onChange={(event) => this.handleChange('cpf', event)} />
                    </div>
                </div>
                <button
                    type={'button'}
                    className={'btn btn-block btn-primary'}
                    onClick={this.handleSubmit}
                >
                    Cadastrar
                </button>
            </div>
        )
    }
}

export default connect(FormUser)
