import React from 'react'
import { map } from 'lodash'

import connect from './connect'

class FormProduto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.produto ? this.props.produto.id : null,
            nome: this.props.produto ? this.props.produto.nome : '',
            descricao: this.props.produto ? this.props.produto.descricao : '',
            estoque: this.props.produto ? this.props.produto.estoque : 0,
            valor_unitario: this.props.produto ? this.props.produto.valor_unitario : 0,
            ano: this.props.produto ? this.props.produto.ano : new Date().getFullYear().toString(),
            idioma: this.props.produto ? this.props.produto.idioma : '',
            categoria: this.props.produto ? this.props.produto.categoria : '',
            autor_id: this.props.produto ? this.props.produto.autor_id : 0,
            editora_id: this.props.produto ? this.props.produto.editora_id : 0,
            target_produto: this.props.produto,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    static getDerivedStateFromProps(next, prev) {

        if (next.produto !== prev.target_produto) {

            next.getAllAutores()
            next.getAllEditoras()

            return {
                id: next.produto ? next.produto.id : '',
                nome: next.produto ? next.produto.nome : '',
                descricao: next.produto ? next.produto.descricao : '',
                estoque: next.produto ? next.produto.estoque : 0,
                valor_unitario: next.produto ? next.produto.valor_unitario : 0,
                ano: next.produto ? next.produto.ano : new Date().getFullYear().toString(),
                idioma: next.produto ? next.produto.idioma : '',
                categoria: next.produto ? next.produto.categoria : '',
                autor_id: next.produto ? next.produto.autor_id : 0,
                editora_id: next.produto ? next.produto.editora_id : 0,
                target_produto: next.produto,
            }
        }

        return null
    }

    componentWillMount() {
        this.props.getAllAutores()
        this.props.getAllEditoras()
    }

    makeAutoresOptions() {

        if (this.props.autores.length) {

            return map(this.props.autores, (autor, index) => {
                return (
                    <option key={index} value={autor.id}>{autor.nome}</option>
                )
            })
        }

        return (<option value={0}>Sem Opções</option>)
    }

    makeEditorasOptions() {

        if (this.props.editoras.length) {

            return map(this.props.editoras, (editora, index) => {
                return (
                    <option key={index} value={editora.id}>{editora.nome}</option>
                )
            })
        }

        return (<option value={0}>Sem Opções</option>)
    }

    cleanState() {
        this.setState({
            nome: '',
            descricao: '',
            estoque: 0,
            valor_unitario: 0,
            ano: new Date().getFullYear().toString(),
            idioma: '',
            categoria: '',
            autor_id: 0,
            editora_id: 0,
        })
    }

    handleCancel() {

        this.cleanState()
        this.props.handleCancel()
    }

    validadeProduto(produto) {

        if (produto.editora_id === 0 || produto.autor_id === 0) {
            return false
        }
        else if (produto.nome === '' || produto.descricao === '' || produto.idioma === '' || produto.categoria === '' || produto.ano === '') {
            return false
        }

        return true
    }

    handleSave() {

        const { id, nome, editora_id, autor_id, estoque, valor_unitario, descricao, categoria, ano, idioma } = this.state

        let produto = {
            nome,
            editora_id,
            autor_id,
            estoque,
            valor_unitario,
            descricao,
            categoria,
            ano,
            idioma
        }

        if (this.state.id) {
            // edição
            produto.id = id
        }

        if (this.validadeProduto(produto)) {

            this.props.handleSave(produto)
        }
    }

    handleChange(event) {

        switch (event.target.id) {
            case 'nome':
                this.setState({ nome: event.target.value })
                break;

            case 'descricao':
                this.setState({ descricao: event.target.value })
                break;

            case 'estoque':
                this.setState({ estoque: event.target.value })
                break;

            case 'valor':
                this.setState({ valor_unitario: event.target.value })
                break;

            case 'ano':
                this.setState({ ano: event.target.value })
                break;

            case 'idioma':
                this.setState({ idioma: event.target.value })
                break;

            case 'categoria':
                this.setState({ categoria: event.target.value })
                break;

            default:
                break;
        }
    }

    handleSelect(event) {

        switch (event.target.id) {
            case 'autor':
                this.setState({ autor_id: event.target.value })
                break;

            case 'editora':
                this.setState({ editora_id: event.target.value })
                break;

            default:
                break;
        }
    }

    render() {

        return (
            <div>

                <div className={'form-row'}>
                    <div className={'form-group col-md-6'}>
                        <label>Nome do Produto</label>
                        <input type={'text'} id={'nome'} placeholder={'Nome'} className={'form-control'} onChange={this.handleChange} value={this.state.nome}></input>
                    </div>
                    <div className={'form-group col-md-6'}>
                        <label>Descrição</label>
                        <input type={'text'} id={'descricao'} placeholder={'Descrição'} className={'form-control'} onChange={this.handleChange} value={this.state.descricao}></input>
                    </div>
                </div>

                <div className={'form-row'}>
                    <div className={'form-group col-md-6'}>
                        <label>Estoque</label>
                        <input type={'number'} id={'estoque'} min={'0'} max={'200'} placeholder={'Estoque'} className={'form-control'} onChange={this.handleChange} value={this.state.estoque}></input>
                    </div>
                    <div className={'form-group col-md-6'}>
                        <label>Valor</label>
                        <input type={'text'} id={'valor'} placeholder={'Valor'} className={'form-control'} onChange={this.handleChange} value={this.state.valor_unitario}></input>
                    </div>
                </div>

                <div className={'form-row'}>
                    <div className={'form-group col-md-6'}>
                        <label>Ano de lançamento</label>
                        <input type={'text'} id={'ano'} placeholder={'Ano'} className={'form-control'} onChange={this.handleChange} value={this.state.ano}></input>
                    </div>
                    <div className={'form-group col-md-6'}>
                        <label>Idioma</label>
                        <input type={'text'} id={'idioma'} placeholder={'Idioma'} className={'form-control'} onChange={this.handleChange} value={this.state.idioma}></input>
                    </div>
                </div>

                <div className={'form-group'}>
                    <label>Categoria</label>
                    <input type={'text'} id={'categoria'} placeholder={'Categoria'} className={'form-control'} onChange={this.handleChange} value={this.state.categoria}></input>
                </div>

                <div className={'form-row'}>
                    <div className={'form-group col-md-6'}>
                        <label>Autor</label>
                        <select className={'form-control'} id={'autor'} onChange={this.handleSelect}>
                            <option value={0}>Selecione</option>
                            {this.makeAutoresOptions()}
                        </select>
                    </div>
                    <div className={'form-group col-md-6'}>
                        <label>Editora</label>
                        <select className={'form-control'} id={'editora'} onChange={this.handleSelect}>
                            <option value={0}>Selecione</option>
                            {this.makeEditorasOptions()}
                        </select>
                    </div>
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

export default connect(FormProduto)
