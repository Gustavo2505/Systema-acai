import vue from 'vue'
import router from 'vue-router'
import Login from './Rotas/components/Login.vue'
import Menu from './Rotas/components/Menu.vue'

vue.use(router)

export default new router({
    mode: 'history',

routes: [{
path:'/',
component:Login  } , 
{
    path: '/menu',
    component: Menu

}]


})