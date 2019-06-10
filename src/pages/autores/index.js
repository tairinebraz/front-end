import React from 'react'
import connect from './connect'
import style from './autores.module.css'
import { menus } from '../../utils/constants'

import Sidebar from '../../components/sideBar'
import Table from '../../components/table'
import Modal from '../../components/modal'
import FormAutor from '../../components/form/autor'

class AutoresPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: 'Cadastrar',
            saveFunction: () => {},
            cancelFunction: () => {},
            last_id: this.props.last_id,
        }

        this.create = this.create.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)

        this.onClickCreate = this.onClickCreate.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.last_id !== prevState.last_id) {
            nextProps.getAllAutores()

            return {
                ...prevState,
                last_id: nextProps.last_id
            }
        }
        return null        
    }

    componentDidMount() {
        this.props.getAllAutores()
    }

    createTableHeaders() {
        if (this.props.autores.length) {

            const autor = this.props.autores[0]
            return Object.keys(autor)
        }
        return []
    }

    onClickCreate() {
        this.setState({
            title: 'Cadastrar',
            saveFunction: this.create,
            cancelFunction: () => {},
            target_autor: null,
        })
    }

    onClickEdit(autor) {

        this.setState({
            title: 'Editar',
            saveFunction: this.edit,
            cancelFunction: () => {},
            target_autor: autor,
        })
    }

    create(autor) {
        this.props.create(autor)
    }

    edit(autor) {
        this.props.edit(autor)
        document.getElementById('closeModal').click()
    }

    remove(autor) {
        this.props.remove(autor)
    }

    render() {

        return (
            <div className={'container-fluid'} style={{ minHeight: '100vh' }}>
                <div className={'row'} style={{ minHeight: '100vh' }}>
                    <Sidebar menus={menus} />
                    <div className={'col'}>
                        <div className={'row'}>
                            <div className={style.title}>
                                <h2>Gerenciamento de Autores</h2>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={style.btn_container}>
                                <button
                                    className={'btn btn-primary'}
                                    type={'button'}
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    onClick={this.onClickCreate}
                                >
                                    Cadastrar Autor
                                </button>
                            </div>
                        </div>
                        <Modal id={'exampleModalCenter'} title={this.state.title}>
                            <FormAutor
                                handleSave={this.state.saveFunction}
                                handleCancel={this.state.cancelFunction}
                                cancelText={'Cancelar'}
                                saveText={'Salvar'}
                                autor={this.state.target_autor}
                            />
                        </Modal>
                        <div className={'row'}>
                            <Table
                                headers={this.createTableHeaders()}
                                data={this.props.autores}
                                visualize={() => { }}
                                edit={this.onClickEdit}
                                remove={this.remove}
                                modal_id={'#exampleModalCenter'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(AutoresPage)
