import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/estudiante',
        component: () => import('../modules/inscripcion/pages/GuardarEstudiante.vue')
    },
   
    {
        path: '/token',
        component: () => import('../modules/inscripcion/pages/Token')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router