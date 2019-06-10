import React from 'react'
import { Icon } from 'react-icons-kit'
import { instagram } from 'react-icons-kit/fa/instagram'
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare'
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare'

import style from './footer.module.css'

class Footer extends React.Component {

    render() {

        return (
            <div className={style.container}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className={style.list_items}>
                        <span className={style.item}>
                            <Icon size={'30px'} icon={instagram}/>
                        </span>

                        <span className={style.item}>
                            <Icon size={'30px'} icon={facebookSquare}/>
                        </span>

                        <span className={style.item}>
                            <Icon size={'30px'} icon={twitterSquare}/>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer
