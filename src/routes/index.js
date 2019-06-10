import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import LoginPage from '../pages/login'
import RegisterUserPage from '../pages/registerUser'
import AreaFuncionario from '../pages/areaFuncionario'
import ProdutosPage from '../pages/produtos'
import AutoresPage from '../pages/autores'
import EditorasPage from '../pages/editoras'
import AreaLogada from '../pages/areaLogada'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/cadastrar-agora' component={RegisterUserPage} />
            <Route exact path='/area-do-funcionario' component={AreaFuncionario} />
            <Route exact path='/area-logada' component={AreaLogada} />
            <Route exact path='/produtos' component={ProdutosPage} />
            <Route exact path='/autores' component={AutoresPage} />
            <Route exact path='/editoras' component={EditorasPage} />
        </Switch>
        <Footer />
    </div>
)

export default routes
