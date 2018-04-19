import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);//플러그인 전역에서 사용하고 싶을때

export const store = new Vuex.Store({
    modules:{
        todoApp
    }
});