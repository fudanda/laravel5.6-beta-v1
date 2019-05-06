import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line
import {
    UserLayout,
    BasicLayout,
    RouteView,
    BlankLayout,
    PageView
} from '@/layouts'
import {
    bxAnaalyse
} from '@/core/icons'
import Login from '@/views/user/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/user',
            name: '登录页',
            component: UserLayout,
            invisible: true,
            children: [{
                    path: 'login',
                    name: 'login',
                    component: () => import( /* webpackChunkName: "user" */ '@/views/user/login')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import( /* webpackChunkName: "user" */ '@/views/user/Register')
                },
                {
                    path: 'register-result',
                    name: 'registerResult',
                    component: () => import( /* webpackChunkName: "user" */ '@/views/user/RegisterResult')
                }
            ]
        },
        {
            path: '/',
            name: '首页',
            component: BasicLayout,
            redirect: '/user/login',
            icon: 'none',
            invisible: true,
            children: [{
                path: '/dashboard',
                name: 'dashboard',
                redirect: '/dashboard/workplace',
                component: RouteView,
                hideChildrenInMenu: true,
                meta: {
                    title: '仪表盘',
                    keepAlive: true,
                    icon: bxAnaalyse,
                    permission: ['dashboard']
                },
                children: [{
                        path: '/dashboard/analysis',
                        name: 'Analysis',
                        component: () => import('@/views/dashboard/Analysis'),
                        meta: {
                            title: '分析页',
                            keepAlive: false,
                            permission: ['dashboard']
                        }
                    },
                    // 外部链接
                    {
                        path: 'https://www.baidu.com/',
                        name: 'Monitor',
                        meta: {
                            title: '监控页（外部）',
                            target: '_blank'
                        }
                    },
                    {
                        path: '/dashboard/workplace',
                        name: 'Workplace',
                        component: () => import('@/views/dashboard/Workplace'),
                        meta: {
                            title: '工作台',
                            keepAlive: true,
                            permission: ['dashboard']
                        }
                    }
                ]
            }, ]
        }
    ]
})
