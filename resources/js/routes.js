/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Extends Vue to use Vue Router
 */
Vue.use(VueRouter)

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
export default new VueRouter({
    routes: [{
            path: '/',
            name: 'index',
            component: BasicLayout,
            meta: {
                title: '首页'
            },
            redirect: '/dashboard/workplace',
            children: [
                // dashboard
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    redirect: '/dashboard/workplace',
                    component: RouteView,
                    meta: {
                        title: '仪表盘',
                        keepAlive: true,
                        icon: bxAnaalyse,
                        permission: ['dashboard']
                    },
                    children: [{
                            path: '/dashboard/analysis',
                            name: 'Analysis',
                            component: () => vue.component('./pages/Cafe.vue').default,
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
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '工作台',
                                keepAlive: true,
                                permission: ['dashboard']
                            }
                        }
                    ]
                },

                // forms
                {
                    path: '/form',
                    redirect: '/form/base-form',
                    component: PageView,
                    meta: {
                        title: '表单页',
                        icon: 'form',
                        permission: ['form']
                    },
                    children: [{
                            path: '/form/base-form',
                            name: 'BaseForm',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '基础表单',
                                keepAlive: true,
                                permission: ['form']
                            }
                        },
                        {
                            path: '/form/step-form',
                            name: 'StepForm',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '分步表单',
                                keepAlive: true,
                                permission: ['form']
                            }
                        },
                        {
                            path: '/form/advanced-form',
                            name: 'AdvanceForm',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '高级表单',
                                keepAlive: true,
                                permission: ['form']
                            }
                        }
                    ]
                },

                // list
                {
                    path: '/list',
                    name: 'list',
                    component: PageView,
                    redirect: '/list/table-list',
                    meta: {
                        title: '列表页',
                        icon: 'table',
                        permission: ['table']
                    },
                    children: [{
                            path: '/list/table-list',
                            name: 'TableListWrapper',
                            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '查询表格',
                                keepAlive: true,
                                permission: ['table']
                            }
                        },
                        {
                            path: '/list/basic-list',
                            name: 'BasicList',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '标准列表',
                                keepAlive: true,
                                permission: ['table']
                            }
                        },
                        {
                            path: '/list/card',
                            name: 'CardList',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '卡片列表',
                                keepAlive: true,
                                permission: ['table']
                            }
                        },
                        {
                            path: '/list/search',
                            name: 'SearchList',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            redirect: '/list/search/article',
                            meta: {
                                title: '搜索列表',
                                keepAlive: true,
                                permission: ['table']
                            },
                            children: [{
                                    path: '/list/search/article',
                                    name: 'SearchArticles',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '搜索列表（文章）',
                                        permission: ['table']
                                    }
                                },
                                {
                                    path: '/list/search/project',
                                    name: 'SearchProjects',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '搜索列表（项目）',
                                        permission: ['table']
                                    }
                                },
                                {
                                    path: '/list/search/application',
                                    name: 'SearchApplications',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '搜索列表（应用）',
                                        permission: ['table']
                                    }
                                }
                            ]
                        }
                    ]
                },

                // profile
                {
                    path: '/profile',
                    name: 'profile',
                    component: RouteView,
                    redirect: '/profile/basic',
                    meta: {
                        title: '详情页',
                        icon: 'profile',
                        permission: ['profile']
                    },
                    children: [{
                            path: '/profile/basic',
                            name: 'ProfileBasic',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '基础详情页',
                                permission: ['profile']
                            }
                        },
                        {
                            path: '/profile/advanced',
                            name: 'ProfileAdvanced',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '高级详情页',
                                permission: ['profile']
                            }
                        }
                    ]
                },

                // result
                {
                    path: '/result',
                    name: 'result',
                    component: PageView,
                    redirect: '/result/success',
                    meta: {
                        title: '结果页',
                        icon: 'check-circle-o',
                        permission: ['result']
                    },
                    children: [{
                            path: '/result/success',
                            name: 'ResultSuccess',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '成功',
                                keepAlive: false,
                                hiddenHeaderContent: true,
                                permission: ['result']
                            }
                        },
                        {
                            path: '/result/fail',
                            name: 'ResultFail',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '失败',
                                keepAlive: false,
                                hiddenHeaderContent: true,
                                permission: ['result']
                            }
                        }
                    ]
                },

                // Exception
                {
                    path: '/exception',
                    name: 'exception',
                    component: RouteView,
                    redirect: '/exception/403',
                    meta: {
                        title: '异常页',
                        icon: 'warning',
                        permission: ['exception']
                    },
                    children: [{
                            path: '/exception/403',
                            name: 'Exception403',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '403',
                                permission: ['exception']
                            }
                        },
                        {
                            path: '/exception/404',
                            name: 'Exception404',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '404',
                                permission: ['exception']
                            }
                        },
                        {
                            path: '/exception/500',
                            name: 'Exception500',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '500',
                                permission: ['exception']
                            }
                        }
                    ]
                },

                // account
                {
                    path: '/account',
                    component: RouteView,
                    redirect: '/account/center',
                    name: 'account',
                    meta: {
                        title: '个人页',
                        icon: 'user',
                        keepAlive: true,
                        permission: ['user']
                    },
                    children: [{
                            path: '/account/center',
                            name: 'center',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '个人中心',
                                keepAlive: true,
                                permission: ['user']
                            }
                        },
                        {
                            path: '/account/settings',
                            name: 'settings',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: '个人设置',
                                hideHeader: true,
                                permission: ['user']
                            },
                            redirect: '/account/settings/base',
                            hideChildrenInMenu: true,
                            children: [{
                                    path: '/account/settings/base',
                                    name: 'BaseSettings',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '基本设置',
                                        hidden: true,
                                        permission: ['user']
                                    }
                                },
                                {
                                    path: '/account/settings/security',
                                    name: 'SecuritySettings',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '安全设置',
                                        hidden: true,
                                        keepAlive: true,
                                        permission: ['user']
                                    }
                                },
                                {
                                    path: '/account/settings/custom',
                                    name: 'CustomSettings',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '个性化设置',
                                        hidden: true,
                                        keepAlive: true,
                                        permission: ['user']
                                    }
                                },
                                {
                                    path: '/account/settings/binding',
                                    name: 'BindingSettings',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '账户绑定',
                                        hidden: true,
                                        keepAlive: true,
                                        permission: ['user']
                                    }
                                },
                                {
                                    path: '/account/settings/notification',
                                    name: 'NotificationSettings',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '新消息通知',
                                        hidden: true,
                                        keepAlive: true,
                                        permission: ['user']
                                    }
                                }
                            ]
                        }
                    ]
                },

                // other
                {
                    path: '/other',
                    name: 'otherPage',
                    component: PageView,
                    meta: {
                        title: '其他组件',
                        icon: 'slack',
                        permission: ['dashboard']
                    },
                    redirect: '/other/icon-selector',
                    children: [{
                            path: '/other/icon-selector',
                            name: 'TestIconSelect',
                            component: () => vue.component('./pages/Cafe.vue').default,
                            meta: {
                                title: 'IconSelector',
                                icon: 'tool',
                                keepAlive: true,
                                permission: ['dashboard']
                            }
                        },
                        {
                            path: '/other/list',
                            component: RouteView,
                            meta: {
                                title: '业务布局',
                                icon: 'layout',
                                permission: ['support']
                            },
                            redirect: '/other/list/tree-list',
                            children: [{
                                    path: '/other/list/tree-list',
                                    name: 'TreeList',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '树目录表格',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: '/other/list/edit-table',
                                    name: 'EditList',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '内联编辑表格',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: '/other/list/user-list',
                                    name: 'UserList',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '用户列表',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: '/other/list/role-list',
                                    name: 'RoleList',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '角色列表',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: '/other/list/system-role',
                                    name: 'SystemRole',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '角色列表2',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: '/other/list/permission-list',
                                    name: 'PermissionList',
                                    component: () => vue.component('./pages/Cafe.vue').default,
                                    meta: {
                                        title: '权限列表',
                                        keepAlive: true
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '*',
            redirect: '/404',
            hidden: true
        }
    ]
});
