import Accueil from './components/accueil.vue';
import Listecategories from "./components/categories/Listecategories.vue"
import menu from './components/menu.vue';
import Viewarticles from "./components/articles/Viewarticles.vue"
import Addaticle from "./components/articles/addarticle.vue"
import Editarticle from "./components/articles/Editarticle.vue"
import Viwearticletable from "./components/articles/Viewarticletable.vue"
import HomeCart from './components/cart/HomeCart.vue';
import Cart from './components/cart/Cart.vue';
import Payment from './components/cart/Payment.vue';
import Login from './components/authentification/login.vue'
import Register from './components/authentification/register.vue'
import Dashboard from './components/admin/dashboard.vue'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'Listecategories',
    path: '/listcat',
    component:Listecategories
    },
    {
        name: 'menu',
        path: '/menu',
        component:menu
        },
        {
            name: 'App',
            path: '/App',
            component:App,
            meta:{isAuth:true}
            },

            {
                name:"Viewarticles",
                path:"/listart",
                component:Viewarticles,
                meta:{isAuth:true}
                },
                {
                    name:"Addarticle",
                    path:"/addarticle",
                    component:Addaticle,
                    meta:{isAuth:true}
                    },
                    {                

                        name:"editarticle",
                        path:"/editarticle/:id",
                        component:Editarticle,
                        meta:{isAuth:true}
                        },
                    {
                        name:"Viewarticletable",
                        path:"/articletable",
                        component:Viwearticletable,
                        meta:{isAuth:true}
                        },
                        {
                            name: "login",
                            path: "/login",
                            component: Login,
                            },
                            {
                            name: "register",
                            path: "/register",
                            component: Register,
                            },
                            {
                            
                            name: "dashboard",
                            path: '/dashboard',
                            component: Dashboard,
                            meta:{isAuth:true}
                            
                            },
                        {
                            path:'/shopping',
                            name:'HomeCart',
                            component:HomeCart,
                            meta:{isAuth:true}
                            },
                            {
                                path:'/cart',
                                name:'Cart',
                                component:Cart,
                                meta:{isAuth:true}
                                },
                                {
                                    path:'/payment',
                                    name:'Payment',
                                    component:Payment,
                                    meta:{isAuth:true}
                                    },    


];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  


