import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        app_name: '{{ name }}',
        copy_text: '© 2019 {{ name }}. All Rights Reserved',
        login: 'Login',
        email: 'E-mail',
        password: 'Password',
        signin: 'Sign In',
        forgot_password: 'Forgot your password?',
        logout: 'Logout',
        dashboard: 'Dashboard',
        monitoring: 'Monitoring',
        registrations: 'Registrations',
        menu: 'Menu',
        categories: 'Categories',
        products: 'Products',
        special_offers: 'Special Offers'
    },
    'pt-br': {
        app_name: '{{ name }}',
        copy_text: '© 2019 {{ name }}. Todos os direitos reservados',
        login: 'Login',
        email: 'E-mail',
        password: 'Senha',
        signin: 'Entrar',
        forgot_password: 'Esqueceu sua senha?',
        logout: 'Sair',
        dashboard: 'Estatísticas',
        monitoring: 'Acompanhamento',
        registrations: 'Cadastros',
        menu: 'Cardápio',
        categories: 'Categorias',
        products: 'Produtos',
        special_offers: 'Promoções'
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages // set locale messages
})

export default i18n
