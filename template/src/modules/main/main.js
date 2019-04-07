export default {
    data() {
        return {
            menus: [
                { name: 'estatisticas', icon: 'bar_chart', path: '/estatisticas' },
                { name: 'acompanhamento', icon: 'timer', path: '/acompanhamento' },
                {
                    name: 'cardapio',
                    submenus: [
                        { name: 'categorias', icon: 'category', path: '/categorias' },
                        { name: 'produtos', icon: 'fastfood', path: '/produtos' },
                        { name: 'promocoes', icon: 'local_offer', path: '/promocoes' }
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
