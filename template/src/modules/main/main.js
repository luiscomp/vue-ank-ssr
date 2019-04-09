export default {
    data() {
        return {
            menus: [
                { name: 'dashboard', icon: 'bar_chart', path: '/dashboard' },
                { name: 'monitoring', icon: 'timer', path: '/monitoring' },
                {
                    name: 'menu',
                    submenus: [
                        { name: 'categories', icon: 'category', path: '/categories' },
                        { name: 'products', icon: 'fastfood', path: '/products' },
                        { name: 'special_offers', icon: 'local_offer', path: '/special_offers' }
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
