<template>
    <div class="login">
        <Headers value="用户注册" isTransparent theme="dark" />
        <div class="login-logo">
            <img src="" alt="">
        </div>
        <form class="login-form" @submit.prevent="loginHandle" action="">
            <div class="login-form-item flex-between-c">
                <div class="login-form-item-prepend">
                    <span class="login-form-moblepre">+86</span>
                </div>
                <input
                    class="login-form-item-input flex-item-1"
                    v-model="phone"
                    type="tel"
                    placeholder="请输入手机号"
                />
                <span class="login-form-item-after"></span>
            </div>
            <div class="login-form-item flex-between-c">
                <div class="login-form-item-prepend">
                    <img src="../../assets/img/login/email.png" alt="">
                </div>
                <input class="login-form-item-input flex-item-1" v-model="password" type="password">
                <span class="login-form-item-after"></span>
            </div>
            <div class="login-form-item flex-between-c">
                <input class="login-form-item-input login-submit flex-item-1" value="登录" type="submit">
                <span class="login-form-item-after"></span>
            </div>
        </form>
        <div class="login-link flex-between-c">
            <router-link to="/codelogin">验证码登录</router-link>
            <router-link to="/forgetpass">忘记密码？</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Schema, { Rules } from 'async-validator';
import { loginCellphone } from '@/api';

// import './login.scss';
const descriptor: Rules = {
    name: {
        type: 'string',
        required: true,
        validator: (rule: any, value: string) => value === 'muji',
    },
    age: {
        type: 'number',
        asyncValidator: (rule: any, value: number) => new Promise((resolve, reject) => {
            if (value < 18) {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('too young'); // reject with error message
            } else {
                resolve();
            }
        }),
    },
};
const validator = new Schema(descriptor);
// PROMISE USAGE
validator.validate({ name: 'muji', age: 12 }).then(() => {
    // validation passed or without error message
    console.log('ok?');
}).catch(({ errors, fields }) => {
    console.log(errors, fields, 'fields');
});

export default defineComponent({
    name: 'Home',
    setup() {
        const phone = ref('');
        const password = ref('');
        const loginHandle = () => {
            loginCellphone({
                phone: phone.value,
                password: password.value,
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.error(err);
            });
        };

        const goback = () => {
            console.log(1);
        };

        return {
            goback,
            phone,
            password,
            loginHandle,
        };
    },
});
</script>

<style lang="scss">
@import './login.scss';
</style>
