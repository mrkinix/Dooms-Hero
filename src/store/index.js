import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        leader: 0
    },
    getters: {},
    mutations: {
        updateLeader (state) {
            state.leader += 1
        }
    },
    actions: {
    },
    modules: {
    }
});
