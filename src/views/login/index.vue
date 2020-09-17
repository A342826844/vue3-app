<template>
    <div>
        <form @submit.prevent="loginHandle" action="">
            <input v-model="phone" type="tel">
            <input v-model="password" type="password">
        </form>
        <button @click="loginHandle">登录</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginCellphone } from '@/api';

export default defineComponent({
    name: 'Home',
    setup() {
        const phone = ref('');
        const password = ref('');

        const router = useRouter();

        const loginHandle = () => {
            loginCellphone({
                phone: phone.value,
                password: password.value,
            }).then((res) => {
                console.log(res);
                router.push('/');
            }).catch((err) => {
                console.error(err);
            });
        };

        return {
            phone,
            password,
            loginHandle,
        };
    },
});
</script>
