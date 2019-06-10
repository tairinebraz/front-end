import React from 'react'
import { Link } from 'react-router-dom'

import connect from './connect'

class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout()
    }

    renderSelected() {
        return (
            <span class='sr-only'>(current)</span>
        )
    }

    renderLogginButton() {

        if (this.props.userLogged) {

            return (
                <li className='nav-item'>
                    <Link className='nav-link' to='/area-logada'>{this.props.userLogged.nome}</Link>
                </li>
            )
        }
        else if (this.props.employee) {

            return (
                <li className='nav-item'>
                    <Link className='nav-link' to='/area-do-funcionario'>{this.props.employee.nome}</Link>
                </li>
            )
        }
        else {
            return (
                <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Entrar</Link>
                </li>
            )
        }
    }

    renderExitButton() {

        if (this.props.userLogged || this.props.employee) {

            return (
                <li className='nav-item'>
                    <span onClick={this.handleLogout}>
                        <Link className='nav-link' to='/'>Sair</Link>
                    </span>
                    
                </li>
            )
        }
        else {
            return (
                <li className='nav-item'>
                </li>
            )
        }
    }

    render() {

        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                    <Link className='navbar-brand' to='/'>BookStore</Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active'>
                                <Link className='nav-link' to='/'>Home </Link>
                            </li>

                            <li className='nav-item dropdown'>
                                <button type={'button'} style={{
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                }} className='nav-link dropdown-toggle' href='' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    Categorias
                                </button>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <Link className='dropdown-item' to='#'>Action</Link>
                                    <Link className='dropdown-item' to='#'>Another action</Link>
                                    <Link className='dropdown-item' to='#'>Something else here</Link>
                                </div>
                            </li>

                            {this.renderLogginButton()}
                            {this.renderExitButton()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(NavBar)
