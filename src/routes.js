import {createWebHistory,createRouter} from 'vue-router'
import LoginForm from './components/LoginForm.vue';

const routes=[
    {
        name:'LoginForm',
        path:'/LoginForm',
        component:LoginForm
    }
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
);
export default router;