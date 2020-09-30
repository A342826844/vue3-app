import { createStore, StoreOptions, MutationTree } from 'vuex';

export interface State {
    lang: string;
    loading: boolean;
    userInfo: {
        token: string;
        userId: number;
    };
}

interface Mutations extends MutationTree<any> {
    changeLoading: (state: State, status: boolean) => void;
}
export interface Store extends StoreOptions<State> {
    state: State;
    mutations: Mutations;
    // actions: unknown,
    // modules: unknown,
}

const Store: Store = {
    state: {
        lang: 'zh-cn',
        loading: false,
        userInfo: {
            token: '',
            userId: 0,
        },
    },
    mutations: {
        changeLoading: (state: State, status: boolean) => {
            state.loading = status;
        },
    },
    actions: {
    },
    modules: {
    },
};

export default createStore(Store);
