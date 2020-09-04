<template>
    <div id="main">
        <Layout></Layout>
        <Loading/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// eslint-disable-next-line import/no-unresolved
import Layout from '@/views/layout/index.vue';
import Loading from '@/components/loading/index.vue';

export default defineComponent({
    name: 'app',
    components: {
        Layout,
        Loading,
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
