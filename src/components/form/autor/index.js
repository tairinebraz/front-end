import React from 'react'

import connect from './connect'

class FormAutor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.autor ? this.props.autor.id : null,
            nome: this.props.autor ? this.props.autor.nome : '',
            target_autor: this.props.autor,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    static getDerivedStateFromProps(next, prev) {

        if (next.autor !== prev.target_autor) {

            return {
                id: next.autor ? next.autor.id : null,
                nome: next.autor ? next.autor.nome : '',
                target_autor: next.autor,
            }
        }

        return null
    }


    cleanState() {
        this.setState({
            nome: '',
        })
    }

    handleCancel() {
        this.cleanState()
        this.props.handleCancel()
    }

    validadeAutor(autor) {

        if (autor.nome === '') {
            return false
        }

        return true
    }

    handleSave() {

        const { id, nome, } = this.state

        let autor = {
            nome,
        }

        if (this.state.id) {
            // edição
            autor.id = id
        }

        if (this.validadeAutor(autor)) {

            this.props.handleSave(autor)
        }
    }

    handleChange(event) {

        switch (event.target.id) {
            case 'nome':
                this.setState({ nome: event.target.value })
                break;

            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <div className={'form-group'}>
                    <label>Nome do autor</label>
                    <input type={'text'} id={'nome'} placeholder={'Nome'} className={'form-control'} onChange={this.handleChange} value={this.state.nome}></input>
                </div>

                <div className={'form-row'}>
                    <div className={'form-group col-md-6'}>
                        <button
                            type="button"
                            data-dismiss="modal"
                            onClick={this.handleCancel}
                            className={"btn btn-block btn-danger"}
                        >
                            {this.props.cancelText}
                        </button>
                    </div>
                    <div className={'form-group col-md-6'}>
                        <button type="button" onClick={this.handleSave} className={"btn btn-block btn-primary"}>{this.props.saveText}</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(FormAutor)
