// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '控制台' },
        children: [
          {
            path: '/canalysis/dashboard/analysis/',
            name: 'Analysis',
            meta: { title: '分析页面' },
            hideChildrenInMenu: true,
            children: [
              {
                path: '/canalysis/form/base-form',
                meta: { title: '基础表单', hidden: true }
              }
            ]
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '仪表盘' }
          }
        ]
      },
      {
        path: '/setting',
        component: RouteView,
        redirect: '/setting/account/settings',
        name: 'account',
        meta: { title: '个人页', icon: 'user' },
        children: [
          {
            path: '/setting/account/settings',
            name: 'settings',
            meta: { title: '个人设置', hideHeader: true },
            redirect: '/setting/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/setting/account/settings/base',
                meta: { title: '基本设置', hidden: true }
              },
              {
                path: '/setting/account/settings/security',
                meta: { title: '安全设置', hidden: true }
              },
              {
                path: '/setting/account/settings/custom',
                meta: { title: '个性化设置', hidden: true }
              },
              {
                path: '/setting/account/settings/binding',
                meta: { title: '账户绑定', hidden: true }
              },
              {
                path: '/setting/account/settings/notification',
                meta: { title: '新消息通知', hidden: true }
              }
            ]
          }
        ]
      }
    ]
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
