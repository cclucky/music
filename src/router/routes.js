export default [{
    name: 'home',
    path: '/home',
    component: () =>
        import ('@/views/Home'),
    meta: {}
}, {
    name: 'login',
    path: '/login',
    component: () =>
        import ('@/views/Login'),
    meta: {}
}, {
    path: '/',
    redirect: '/home',
    component: () =>
        import ('@/views/Home'),
    meta: {}
}, ]