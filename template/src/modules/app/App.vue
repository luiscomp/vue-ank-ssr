<template>
    <div id="app" class="full-content">
        <router-view/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Meta from 'mixins/meta'

export default {
    mixins: [ Meta ],
    name: 'App',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            loading: state => state.loading
        })
    },
    methods: {
        ...mapActions([
            'exibirLoading'
        ])
    }
}
</script>
