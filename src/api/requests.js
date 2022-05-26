import axios from "axios";
import store from "@/store";

const requests = axios.create({
    //基础路径
    baseURL: "/api",
    timeout: 5000,

})

requests.interceptors.request.use(config => {
    if (store.state.m_user.token) {
        config.headers.token = store.state.m_user.token
    }
    return config
})

requests.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(new Error('faile'));
})

export default requests