export default {
    path: '/teacher',
    name: 'teacher',
    component: import("../pages/teacher/Teacher.vue"),
    children:[
        {
            path: '/teacher_groups',
            name: 'teacher_groups',
            component: import("../pages/teacher/Groups.vue")
        },
        {
            path: '/teacher_single_group/:id',
            name: 'teacher_single_group',
            meta:{
                child: 'teacher_single_group'
            },
            component: import("../pages/teacher/SingleGroup.vue")
        }
    ]
}