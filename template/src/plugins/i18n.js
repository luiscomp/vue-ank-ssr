import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'pt-br': {
        app_name: '{{ name }}',
        corporacao: '© 2019 {{ name }}. Todos os direitos reservados',
        login: 'Login',
        email: 'E-mail',
        senha: 'Senha',
        entrar: 'Entrar',
        esqueceu_sua_senha: 'Esqueceu sua senha?',
        sair: 'Sair',
        estatisticas: 'Estatísticas',
        acompanhamento: 'Acompanhamento',
        cadastros: 'Cadastros',
        cardapio: 'Cardápio',
        categorias: 'Categorias',
        produtos: 'Produtos',
        promocoes: 'Promoções'
    },
    'en': {
        app_name: '{{ name }}',
        corporacao: '© 2019 {{ name }}. All Rights Reserved',
        login: 'Login',
        email: 'E-mail',
        senha: 'Password',
        entrar: 'Sign In',
        esqueceu_sua_senha: 'Forgot your password?',
        sair: 'Logout',
        estatisticas: 'Dashboard',
        acompanhamento: 'Monitoring',
        cadastros: 'Registrations',
        cardapio: 'Menu',
        categorias: 'Categories',
        produtos: 'Products',
        promocoes: 'Special Offers'
    }
}

const i18n = new VueI18n({
    locale: 'pt-br', // set locale
    fallbackLocale: 'pt-br', // set fallback locale
    messages // set locale messages
})

export default i18n
