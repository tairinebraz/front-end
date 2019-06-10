import React from 'react'
import style from './hero.module.css'

class Hero extends React.Component {

    renderSubText() {
        if (this.props.subtext) {
            return(
                <span className={style.subtext}>
                    { this.props.subtext }
                </span>
            )
        }
    }

    render() {

        return(
            <div className={style.hero}>
                <h1>{ this.props.children }</h1>
                { this.renderSubText() }
            </div>
        )
    }
}

export default Hero
