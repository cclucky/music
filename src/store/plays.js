import { getMusicUrl, getMusicIds } from '@/api';

export default {
    namespaced: true,
    state: () => ({
        MusicUrlList: [],
        songsId: '',
        songsLists: []
    }),
    actions: {
        //获取音乐 url
        async getMusicUrlList({ commit }, id) {
            let res = await getMusicUrl(id)
            if (res.code == 200) {
                let res1 = await getMusicIds(res.data[0].id)
                const { url, id } = res.data[0]
                const { name, dt } = res1.songs[0]
                let songer = res1.songs[0].ar[0].name
                const songsList = { url, id, name, songer, dt }
                let data = res.data[0]
                commit('MUSICURLLIST', { data, songsList })

            }
        },
        allClearX({ commit }) {
            commit('ALLCLEARX')
        },
        allClearItem({ commit }, index) {
            commit('ALLCLEARITEM', index)
        }
    },
    mutations: {
        MUSICURLLIST(state, { data, songsList }) {
            state.songsLists.unshift(songsList)
            state.MusicUrlList.unshift(data)
            state.songsId = data.id
        },
        ALLCLEARX(state) {
            state.songsLists = []
        },
        ALLCLEARITEM(state, index) {
            state.songsLists.splice(index, 1)
        }
    },
    getters: {}
}