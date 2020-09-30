<template>
    <div class="login">
        <Headers value="用户注册" isTransparent theme="dark" />
        <form @submit.prevent="loginHandle" action="">
            <input v-model="phone" type="tel">
            <input v-model="password" type="password">
        </form>
        <button @click="loginHandle">登录</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { loginCellphone } from '@/api';

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
@import url('./login.scss');
</style>
