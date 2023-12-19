export default {
  path: "/admin",
  name: "admin",
  component: import("../pages/admin/Admin.vue"),
  children: [
    {
      path: "/students",
      name: "students",
      component: import("../pages/admin/Student.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: import("../pages/admin/Courses.vue"),
    },
    {
      path: "/rooms",
      name: "rooms",
      component: import("../pages/admin/Rooms.vue"),
    },
    {
      path: "/groups",
      name: "groups",
      component: import("../pages/admin/Groups.vue"),
    },
    {
      path: "/single_group/:id",
      name: "single_group",
      meta: {
        child: 'single_group'
      },
      component: import("../pages/admin/SingleGroup.vue"),
    },
    {
      path: "/admin_profile",
      name: "admin_profile",
      component: import("../pages/global/Profile.vue"),
    },
  ],
};
