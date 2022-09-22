import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter,createWebHistory } from 'vue-router';
import App from './App.vue'
import NavBar from './components/common/NavBar.vue'
import BikesList from './components/Bikes/BikesList.vue'
import TheCarousel from './components/common/TheCarousel.vue'

import TheHome from './components/common/TheHome.vue'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        // {
        //     path:'/',redirect:'/teams'
        // },
        {
            path:'/home',component:TheHome,alias:"/"
        },
        {
            path:'/bikes-list',component:BikesList,alias:"/"
        },
        // {
        //     path:'/users',component:UserList
        // },
        // {
        //     // path:'/teams/:teamId',components:TeamList
        //     path:'/teams/:teamId',component:TeamMembers,props:true
        // },
        // {
        //     // path:'/teams/:teamId',components:TeamList
        //     path:'/:notFound(.*)',redirect:'/teams'
        // },
    ], 
});
const app = createApp(App)

app.component('nav-bar', NavBar);
app.component('the-carousel', TheCarousel);

app.use(router);

app.mount('#app');
