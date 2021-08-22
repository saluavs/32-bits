import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
import Busqueda from './components/Busqueda'
import Total from './components/Total'
import Venta from './components/Venta'
import Error from './components/Error'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: Busqueda
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        }, 
        {
            path: '/venta',
            name: 'venta',
            component: Venta
        },
        {
            path: '/*',
            name: 'error',
            component: Error
        }      
    ]
})