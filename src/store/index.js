import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: (localStorage.getItem('isLoggedIn') == 'true'),
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({
            commit
        }) {
            localStorage.setItem('isLoggedIn', 'true');
            commit('login');
        },
        logout({
            commit
        }) {
            localStorage.setItem('isLoggedIn', 'false');
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => !!state.isLoggedIn
    }
});