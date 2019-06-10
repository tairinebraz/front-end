import React from 'react'

import connect from './connect'

class FormEditora extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.editora ? this.props.editora.id : null,
            nome: this.props.editora ? this.props.editora.nome : '',
            target_editora: this.props.editora,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    static getDerivedStateFromProps(next, prev) {

        if (next.editora !== prev.target_editora) {

            return {
                id: next.editora ? next.editora.id : null,
                nome: next.editora ? next.editora.nome : '',
                target_editora: next.editora,
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

    validadeEditora(editora) {

        if (editora.nome === '') {
            return false
        }

        return true
    }

    handleSave() {

        const { id, nome, } = this.state

        let editora = {
            nome,
        }

        if (this.state.id) {
            // edição
            editora.id = id
        }

        if (this.validadeEditora(editora)) {

            this.props.handleSave(editora)
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
                    <label>Nome da editora</label>
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

export default connect(FormEditora)
