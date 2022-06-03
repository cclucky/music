export default [{
    name: 'home',
    path: '/home',
    component: () =>
        import ('@/views/Home'),
    meta: {},
    children: [{
        name: 'playLists',
        path: 'playLists',
        component: () =>
            import ('@/views/Home/PlayLists'),
        meta: {},
    }, {
        name: 'toplist',
        path: 'toplist',
        component: () =>
            import ('@/views/Home/Toplist'),
        meta: {},
    }, {
        name: 'artist',
        path: 'artist',
        component: () =>
            import ('@/views/Home/artist'),
        meta: {},
    }]
}, {
    path: '/mymusic',
    component: () =>
        import ('@/views/MyMusic'),
    meta: {},
    children: [{
        path: '/',
        redirect: 'MyPlaysList',
    }, {
        name: 'myplayslist',
        path: 'myplayslist',
        component: () =>
            import ('@/views/MyMusic/MyPlaysList'),
        meta: {},
    }, ]
}, {
    name: 'song',
    path: '/song',
    component: () =>
        import ('@/views/Song'),
    meta: {}
}, {
    name: 'login',
    path: '/login',
    component: () =>
        import ('@/views/Login'),
    meta: {}
}, {
    name: 'songshot',
    path: '/songshot',
    component: () =>
        import ('@/views/songsHot'),
    meta: {}
}, {
    name: 'musiclist',
    path: '/musiclist',
    component: () =>
        import ('@/views/Musiclist'),
    meta: {}
}, {
    path: '/',
    redirect: '/home',
    component: () =>
        import ('@/views/Home'),
    meta: {}
}, ]