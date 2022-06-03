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
    ///playlist/catlist全部
export const allPlayList = () => requests({ url: `/personalized`, method: 'get' })
    //歌单全部歌曲playlist/track/all
export const allPlayTrackList = (id, limit, offset) => requests({ url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`, method: 'get' })

export const allTrackList = (id) => requests({ url: `/playlist/detail?id=${id}`, method: 'get' })
    ///homepage/dragon/ball首页-发现-圆形图标入口列表
export const ballList = () => requests({ url: `/homepage/block/page`, method: 'get' })
    ///artist/detail歌手详情
export const songsArtist = (id) => requests({ url: `/artist/songs?id=${id}`, method: 'get' })
export const songsSimiist = (id) => requests({ url: `/artist/detail?id=${id}`, method: 'get' })
    //获取用户歌单
export const getUserPlayList = (uid) => requests({ url: `/user/playlist?uid=${uid}`, method: 'get' })
    ///user/subcount
export const getUserBinding = (uid) => requests({ url: `/user/binding?uid=${uid}`, method: 'get' })
    //歌单评论 &pageNo=${pageNo}&pageSize=${pageSize}&sortType=${sortType}&cursor=${cursor}   pageNo, pageSize, sortType, cursor
export const getUserPlayDic = (type, id, pageNo, pageSize, sortType, cursor) => requests({ url: `/comment/new?type=${type}&id=${id}&pageNo=${pageNo}&pageSize=${pageSize}&sortType=${sortType}&cursor=${cursor}`, method: 'get' })
    ///comment
export const addComment = (t, type, id, content, commentId) => requests({ url: `/comment?t=${t}&type=${type}&id=${id}&content=${content}&commentId=${commentId}`, method: 'get' })
    //删除歌单
export const getDeletePlayList = (id) => requests({ url: `/playlist/delete?id=${id}`, method: 'get' })
    //新建歌单
export const getNewPlayList = (name) => requests({ url: `/playlist/create?name=${name}`, method: 'get' })

export const getLyricList = (id) => requests({ url: `/lyric?id=${id}`, method: 'get' })
    ///comment/music
export const getMusicLyricList = (id, limit) => requests({ url: `/comment/music?id=${id}&limit=${limit}`, method: 'get' })

export const getTopList = (id) => requests({ url: `/top/list?id=${id}`, method: 'get' })

export const getTopListDetail = () => requests({ url: `/toplist`, method: 'get' })
    // /toplist/artist歌手榜单
export const getTopListArtist = () => requests({ url: `/toplist/artist`, method: 'get' })
    //  /search?keywords=
export const getSearchList = (keywords, limit, type, offset) => requests({ url: `/search?keywords=${keywords}&limit=${limit}&type=${type}&offset=${offset}`, method: 'get' })