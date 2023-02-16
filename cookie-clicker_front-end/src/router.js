import {createWebHistory, createRouter} from "vue-router";
import CookieClicker from './pages/Index.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/', 
            name:'CookieCicker',
            component: CookieClicker
        }
    ]
})

export default router;