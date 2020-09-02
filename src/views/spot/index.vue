<template>
    <div>
        实物交割
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: 'future',
    setup() {
        const test = ref(1);

        const route = useRoute();

        const router = useRouter();

        const activeName = computed(() => useRoute());

        const addHandle = () => {
            console.log(route);
            router.push('/aaa');
            test.value += 1;
        };
        return {
            test,
            addHandle,
            route,
            activeName,
        };
    },
});
</script>
