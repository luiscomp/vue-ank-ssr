import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            loginVisible: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.loginVisible = true
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
            'showLoading'
        ]),
        signIn() {
            this.showLoading(this)
            setTimeout(() => {
                this.showLoading(this)
                this.$router.push('/dashboard')
            }, 2000)
        }
    }
}
