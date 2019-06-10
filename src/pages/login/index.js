import React from 'react'
import LoginForm from '../../components/form/login'
import style from './login.module.css'
import connect from './connect'

class LoginPage extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.userLogged) {

            nextProps.redirect('/area-logada')
        }
        else if (nextProps.employee) {

            nextProps.redirect('/area-do-funcionario')
        }

        return null
    }


    componentWillMount() {

        if (this.props.userLogged) {

            this.props.redirect('/area-logada')
        }
        else if (this.props.employee) {

            this.props.redirect('/area-do-funcionario')
        }
    }

    render() {

        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={style.hero}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(LoginPage)
