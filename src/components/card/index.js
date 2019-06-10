import React from 'react'

import './card.module.css'

class Card extends React.Component {

    constructor(props) {
        super(props)

        this.handleBuy = this.handleBuy.bind(this)
    }

    handleBuy() {
        this.props.addCarrinho(this.props.produto)
        this.props.redirect('/carrinho')
    }

    createButton() {

    }

    render() {

        if (!this.props.produto) {
            return(null)
        }

        return(
            <div className="card" style={{ width: '18rem', margin: '20px 0px 0px 0px', maxHeight: '24rem' }}>
                <img src={'/images/screen.jpg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.produto.nome}</h5>
                    <p className="card-text">{this.props.produto.descricao}</p>
                    <p className="card-text">R${this.props.produto.valor_unitario}</p>
                    <button type={'button'} className="btn btn-primary">Comprar</button>
                </div>
            </div>
        )
    }
}

export default Card
