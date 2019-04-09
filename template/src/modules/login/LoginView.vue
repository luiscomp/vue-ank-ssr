<template>
    <div class="ank-full-content">
        <div class="login-bg">

        </div>
        <div class="login" v-bind:class="{ 'login-form__visivel': loginVisible}">
            <div class="form">
                <h1>\{{ $t('login') }}</h1>
                <vs-input icon="email" :label-placeholder="$t('email')" />
                <vs-input icon="lock" :label-placeholder="$t('senha')" style="margin: 20px 0px 10px 0px"/>
                <div class="form--footer">
                    <vs-button size="small" style="float: right" @click="signIn">\{{ $t('entrar') }}</vs-button>
                    <span style="float: left; font-size: 14px; line-height: 26px; height: 26px">\{{ $t('esqueceu_sua_senha') }}</span>
                </div>
            </div>
            <div class="login--footer">
                <span>\{{ $t('corporacao') }}</span>
            </div>
        </div>
    </div>
</template>

<script src="./login"></script>
