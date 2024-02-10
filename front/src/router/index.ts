import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import OrderView from '../views/OrderView.vue'
import MoreView from '../views/MoreView.vue'
import AdminMenuView from '../views/admin/AdminMenuView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuView
        },
        {
            path: '/order',
            name: 'order',
            component: OrderView
        },
        {
            path: '/more',
            name: 'more',
            component: MoreView
        },
        {
            path: '/admin/menu',
            name: 'adminMenu',
            component: AdminMenuView
        },
    ]
})

export default router
