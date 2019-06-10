const menus = [
    {
        title: 'Area Logada',
        itens: [{
            nome: 'Inicio',
            href: '/area-do-funcionario'
        }]
    },
    {
        title: 'Produtos',
        itens: [{
            nome: 'Gerenciar Produtos',
            href: '/produtos'
        }]
    }, {
        title: 'Vendas',
        itens: [{
            nome: 'Gerenciar Vendas',
            href: '/vendas'
        }]
    },
    {
        title: 'Autores',
        itens: [{
            nome: 'Gerenciar Autores',
            href: '/autores'
        }]
    },
    {
        title: 'Editoras',
        itens: [{
            nome: 'Gerenciar Editoras',
            href: '/editoras'
        }]
    },
    {
        title: 'Funcionários',
        itens: [{
            nome: 'Gerenciar Funcionários',
            href: '/funcionarios'
        }]
    }]

const menus_usuarios = [
    {
        title: 'Area Logada',
        itens: [{
            nome: 'Inicio',
            href: '/area-logada'
        }]
    },
    {
        title: 'Minhas compras',
        itens: [{
            nome: 'Gerenciar Produtos',
            href: '/minhas-compras'
        }]
    }]

module.exports = {
    menus,
    menus_usuarios
}
