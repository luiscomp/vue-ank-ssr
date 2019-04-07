<template>
    <div class="ank-full-content">
        <div class="login-bg">

        </div>
        <div class="login-form" v-bind:class="{ 'login-form__visivel': loginVisivel}">
            <div class="login-form--formulario">
                <h1>\{{ $t('login') }}</h1>
                <vs-input icon="email" :label-placeholder="$t('email')" />
                <vs-input icon="lock" :label-placeholder="$t('senha')" style="margin: 20px 0px 10px 0px"/>
                <div class="formulario-footer">
                    <vs-button size="small" style="float: right" @click="entrar">\{{ $t('entrar') }}</vs-button>
                    <span style="float: left; font-size: 14px; line-height: 26px; height: 26px">\{{ $t('esqueceu_sua_senha') }}</span>
                </div>
            </div>
            <div class="login-form--footer">
                <span>\{{ $t('corporacao') }}</span>
            </div>
        </div>
    </div>
</template>

<script src="./login"></script>
