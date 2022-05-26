import requests from "./requests";

export const getLogins = (phone, password) => requests({ url: `/login/cellphone?phone=${phone}&password=${password}`, method: 'get' })
    // 热门歌单分类
    // 说明 : 调用此接口,可获取歌单分类,包含 category 信息

// 接口地址 : /playlist/hot

// 调用例子 : /playlist/hot
export const getHotPlayList = () => requests({ url: '/personalized', method: 'get' })
    //说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
export const getbanner = () => requests({ url: '/banner', method: 'get' })

export const getNewsong = () => requests({ url: '/personalized/newsong', method: 'get' })
    //
export const getDatasongs = () => requests({ url: `/recommend/resource`, method: 'get' })
    ///top/artists
export const getTopsongs = (limit) => requests({ url: `/top/artists?limit=${limit}`, method: 'get' })
    //获取音乐 url
export const getMusicUrl = (id) => requests({ url: `/song/url?id=${id}`, method: 'get' })

export const getMusicIds = (ids) => requests({ url: `/song/detail?ids=${ids}`, method: 'get' })
    //验证码
export const getCaptcha = (phone) => requests({ url: `/captcha/sent?phone=${phone}`, method: 'get' })
    //登录退出
export const Login = (phone, captcha) => requests({ url: `/login/cellphone?phone=${phone}&captcha=${captcha}`, method: 'get' })
export const logout = () => requests({ url: `logout`, method: 'get' })

export const LoginMn = (phone, password) => requests({ url: `/login/cellphone?phone=${phone}&password=${password}`, method: 'get' })