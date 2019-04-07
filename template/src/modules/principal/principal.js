export default {
    data() {
        return {
            menus: [
                { nome: 'estatisticas', icone: 'bar_chart', path: '/estatisticas' },
                { nome: 'acompanhamento', icone: 'timer', path: '/acompanhamento' },
                {
                    nome: 'cardapio',
                    submenus: [
                        { nome: 'categorias', icone: 'category', path: '/categorias' },
                        { nome: 'produtos', icone: 'fastfood', path: '/produtos' },
                        { nome: 'promocoes', icone: 'local_offer', path: '/promocoes' }
                    ]
                }
            ]
        }
    },
    methods: {
        sair() {
            this.$router.push('/')
        }
    }
}
