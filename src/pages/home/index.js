import React from 'react'
import connect from './connect'
import { map } from 'lodash'

import style from './home.module.css'

import Hero from '../../components/hero'

import { Icon } from 'react-icons-kit'
import { userO } from 'react-icons-kit/fa/userO'
import { book } from 'react-icons-kit/fa/book'
import { search } from 'react-icons-kit/fa/search'
import Card from '../../components/card'

class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentWillMount() {
    this.props.findProdutos()
  }

  renderProdutos() {
    if (this.props.produtos.length) {

      return map(this.props.produtos, (produto, index) => {

        return (
          <Card key={index} produto={produto} />
        )
      })
    }

    return (null)
  }

  render() {
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={style.title}>
            <Hero
              children={'Bem vindo a BookStore'}
              subtext={'Aqui você vai encontrar um mundo cheio livros só pra você ^^'}
            />
          </div>
        </div>
        <div className={style.sub_title_row}>
          <div>
            <h3>Conosco você irá encontrar ...</h3>
          </div>
        </div>
        <div className={style.row}>
          <div className={'.col-md-4'}>
            <div className={style.item}>
              <span>
                <Icon icon={userO} size={'80px'} />
              </span>
              <span className={style.item_text}>
                <p>
                  Os principais autores.
                </p>
              </span>
            </div>
          </div>
          <div className={'.col-md-4'}>
            <div className={style.item}>
              <span>
                <Icon icon={book} size={'80px'} />
              </span>
              <span className={style.item_text}>
                <p>
                  Os livros mais desejados
                </p>
              </span>
            </div>
          </div>
          <div className={'.col-md-4'}>
            <div className={style.item}>
              <span>
                <Icon icon={search} size={'80px'} />
              </span>
              <span className={style.item_text}>
                <p>
                  Busca simples e rápida pra facilitar seu dia
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={style.card_row}>
          {this.renderProdutos()}
        </div>
      </div>
    )
  }
}

export default connect(HomePage)