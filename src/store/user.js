import { Login, LoginMn, logout } from '@/api';
import router from '@/router';
export default {
    namespaced: true,

    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
    }),
    actions: {
        async getUserInfo({ commit }, data) {
            const { phone, password, yanz } = data
            let res
            if (password === '') {
                res = await Login(phone, yanz)
            } else {
                res = await LoginMn(phone, password)
            }
            if (res.code == 200) {
                commit('GETUSERINFO', res)
                localStorage.setItem("token", res.token)
                router.push({ path: '/home' })
            }
        },
        async userLogout({ commit }) {
            let res = await logout()
            if (res.code == 200) {
                commit('USERLOGOUT')
                router.push({ path: '/login' })
            }
        }
    },
    mutations: {
        GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            state.token = userInfo.token
        },
        //用户退出
        USERLOGOUT(state) {
            state.token = ''
            state.userInfo = {}
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
        }
    },
    getters: {}

}