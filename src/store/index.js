import Vue from 'vue'
import Vuex from 'vuex'
import moduleUser from './user'
import modulePlays from './plays'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        m_user: moduleUser,
        m_plays: modulePlays
    }
})