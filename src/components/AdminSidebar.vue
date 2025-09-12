<template>
  <!-- Desktop Sidebar -->
  <div
      class="hidden sm:flex side h-full bg-gray-900 text-white flex-col p-[5px] sm:p-4 shadow-lg pt-[50px]"
  >
    <!-- Header -->
    <h2 class="hidden sm:block text-2xl font-bold mb-6 text-right">
      منوی ادمین
    </h2>

    <!-- Dashboard -->
    <router-link :class="linkClass('/admin')" to="/admin">
      <span class="material-icons-outlined"> dashboard </span>
      <span class="hidden sm:inline ml-3"> داشبورد </span>
    </router-link>

    <!-- Edit Profile -->
    <router-link :class="linkClass('/edit-profile-admin')" to="/edit-profile-admin">
      <span class="material-icons-outlined"> manage_accounts </span>
      <span class="hidden sm:inline ml-3"> ویرایش پروفایل ادمین </span>
    </router-link>

    <!-- Calendar -->
    <router-link :class="linkClass('/cal_ed')" to="/cal_ed">
      <span class="material-icons-outlined"> calendar_month </span>
      <span class="hidden sm:inline ml-3"> ویرایش تقویم </span>
    </router-link>

    <!-- Violations -->
    <router-link :class="linkClass('/violations')" to="/violations">
      <span class="material-icons-outlined"> gavel </span>
      <span class="hidden sm:inline ml-3"> ثبت خلافی کاربران </span>
    </router-link>

    <!-- Logout -->
    <router-link
        class="p-2 rounded flex items-center gap-2 bg-red-600 hover:bg-red-700 mt-2"
        to="/"
    >
      <span class="material-icons-outlined"> logout </span>
      <span class="hidden sm:inline ml-3"> خروج </span>
    </router-link>
  </div>

  <!-- Mobile Dock -->
  <div
      class="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg"
  >
    <div class="btm-nav h-16 text-xl">
      <router-link to="/admin" :class="{ active: isActive('/admin') }">
        <span class="material-icons-outlined"> dashboard </span>
      </router-link>
      <router-link
          to="/edit-profile-admin"
          :class="{ active: isActive('/edit-profile-admin') }"
      >
        <span class="material-icons-outlined"> manage_accounts </span>
      </router-link>
      <router-link to="/cal_ed" :class="{ active: isActive('/cal_ed') }">
        <span class="material-icons-outlined"> calendar_month </span>
      </router-link>
      <router-link to="/violations" :class="{ active: isActive('/violations') }">
        <span class="material-icons-outlined"> gavel </span>
      </router-link>
      <router-link to="/" class="text-red-500">
        <span class="material-icons-outlined"> logout </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const linkClass = () => [
  "p-2 sm:p-3 rounded flex justify-center sm:justify-start items-center gap-2 transition-colors duration-300 relative group hover:bg-gray-800",
];

const isActive = (path) => route.path === path;
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

.btm-nav {
  height: 70px !important; /* bigger dock */
  font-size: 1.5rem; /* bigger icons */
}

.btm-nav :deep(.active) {
  color: #3b82f6; /* blue-500 highlight */
}
</style>
