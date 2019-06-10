import React from 'react'
import FormUser from '../../components/form/user'

import style from './register.module.css'
import connect from './connect'

class RegisterUserPage extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.userLogged) {

            nextProps.redirect('/area-logada')
        }
        else if (nextProps.employee) {

            nextProps.redirect('/area-do-funcionario')
        }

        return null
    }

    render() {
        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={style.page}>
                        <div className={style.container_box}>
                            <div className={style.box}>
                                <FormUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(RegisterUserPage)
