import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            loginVisivel: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.loginVisivel = true
        }, 200)
    },
    computed: {
        ...mapState('loginStore', {

        }),
        ...mapGetters([

        ])
    },
    methods: {
        ...mapActions([
            'exibirLoading'
        ]),
        entrar() {
            this.exibirLoading(this)
            setTimeout(() => {
                this.exibirLoading(this)
                this.$router.push('/principal')
            }, 2000)
        }
    }
}
