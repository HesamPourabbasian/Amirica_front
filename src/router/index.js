import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Calendar from "../components/calendar.vue";
import About from "../components/About.vue";
import MemberProfile from "../components/MemberProfile.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import UserDashboard from "../components/UserDashboard.vue";
import AdminProfileEdit from "@/components/AdminProfileEdit.vue";
import calendar_ed from "../components/calendar_editor.vue"
import violations from "../components/violations.vue"
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
    {path: '/edit-profile-admin', component: AdminProfileEdit},
    {path: '/cal_ed' ,component: calendar_ed },
    {path: '/violations', component: violations}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If browser back/forward, restore position
        if (savedPosition) {
            return savedPosition;
        }
        // Always scroll to top on new page
        return { top: 0 };
    },

});

export default router;
