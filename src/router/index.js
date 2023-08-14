import { createRouter, createWebHistory } from 'vue-router'
const PeiChart = () =>
    import ('./../components/PieChart.vue')
const Carousel = () =>
    import ('./../components/CarouselVue.vue')
const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: PeiChart
    }, {
        path: '/carousel',
        name: 'carousel',
        component: Carousel
    }]
})

export default router