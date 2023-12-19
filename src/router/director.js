export default {
    path: '/director',
    name: 'director',
    component: import("../pages/director/Director.vue"),
    children:[
        {
            path: '/staffs',
            name: 'staffs',
            component: import("../pages/director/Staffs.vue")
        },
        {
            path: '/roles',
            name: 'roles',
            component: import("../pages/director/Roles.vue")
        }
    ]
}