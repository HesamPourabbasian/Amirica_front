import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Calendar from "../components/calendar.vue";
import About from "../components/About.vue";
import MemberProfile from "../components/MemberProfile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/calendar", component: Calendar },
  { path: "/about", component: About },
  {path: "/member/:id", component: MemberProfile, props: true},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
