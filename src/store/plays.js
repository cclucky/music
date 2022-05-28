import { getMusicUrl } from '@/api';

export default {
    namespaced: true,
    state: () => ({
        MusicUrlList: [],
        songsId: ''
    }),
    actions: {
        //获取音乐 url
        async getMusicUrlList({ commit }, id) {
            let res = await getMusicUrl(id)
            if (res.code == 200) {
                commit('MUSICURLLIST', res.data[0])
            }
        },
    },
    mutations: {
        MUSICURLLIST(state, data) {
            state.MusicUrlList = data
            state.songsId = data.id
        }
    },
    getters: {}
}