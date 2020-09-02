<template>
    <div id="main">
        <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div>
        <router-view/> -->
        <Layout></Layout>
        test
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// eslint-disable-next-line import/no-unresolved
import Layout from '@/views/layout/index.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'app',
    components: {
        Layout,
    },
});
</script>

<style lang="scss">
#main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
