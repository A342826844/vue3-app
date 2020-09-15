import { createStore } from 'vuex';

export default createStore({
    state: {
        lang: 'zh-cn',
        loading: false,
        userInfo: {
            token: '',
        },
    },
    mutations: {
        changeLoading: (state, status) => {
            state.loading = status;
        },
    },
    actions: {
    },
    modules: {
    },
});
