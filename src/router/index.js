import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Calendar from "../components/Calendar.vue";
import About from "../components/About.vue";
import MemberProfile from "../components/MemberProfile.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import UserDashboard from "../components/UserDashboard.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    {
        path: "/dashboard",
        redirect: () => {
            const role = localStorage.getItem("userRole");
            if (role === "admin") return "/admin";
            return "/user";
        },
        meta: { requiresAuth: true },
    },
    { path: "/calendar", component: Calendar },
    { path: "/about", component: About },
    { path: "/member/:id", component: MemberProfile, props: true, meta: { requiresAuth: true } },
    { path: "/admin", component: AdminDashboard },
    { path: "/user", component: UserDashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Guard
router.beforeEach((to, from, next) => {
    const userRole = localStorage.getItem("userRole");

    if (to.meta.requiresAuth && !userRole) {
        return next({ path: "/login", query: { redirect: to.fullPath } });
    }

    next();
});

export default router;
