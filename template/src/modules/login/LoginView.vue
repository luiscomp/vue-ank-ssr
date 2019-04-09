<template>
    <div class="ank-full-content">
        <div class="login-bg">

        </div>
        <div class="login" v-bind:class="{ 'login-form__visible': loginVisible}">
            <div class="form">
                <h1>\{{ $t('login') }}</h1>
                <vs-input icon="email" :label-placeholder="$t('email')" />
                <vs-input icon="lock" :label-placeholder="$t('password')" style="margin: 20px 0px 10px 0px"/>
                <div class="form--footer">
                    <vs-button size="small" @click="signIn">\{{ $t('signin') }}</vs-button>
                    <span>\{{ $t('forgot_password') }}</span>
                </div>
            </div>
            <div class="login--footer">
                <span>\{{ $t('copy_text') }}</span>
            </div>
        </div>
    </div>
</template>

<script src="./login"></script>
