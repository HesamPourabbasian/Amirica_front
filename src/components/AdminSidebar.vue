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
    <button
        class="p-2 rounded flex items-center gap-2 bg-red-600 hover:bg-red-700 mt-2"
        onclick="document.getElementById('logoutModal').showModal()"
    >
      <span class="material-icons-outlined"> logout </span>
      <span class="hidden sm:inline ml-3"> خروج </span>
    </button>
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
      <button
          class="text-red-500"
          onclick="document.getElementById('logoutModal').showModal()"
      >
        <span class="material-icons-outlined"> logout </span>
      </button>
    </div>
  </div>

  <!-- DaisyUI Modal -->
  <dialog id="logoutModal" class="modal">
    <div class="modal-box text-right">
      <h3 class="font-bold text-lg">آیا مطمئنید میخواهید خارج شوید؟</h3>
      <div class="modal-action">
        <form method="dialog" class="flex gap-2">
          <!-- Cancel -->
          <button class="btn">انصراف</button>
          <!-- Confirm -->
          <router-link to="/" class="btn btn-error">خروج</router-link>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Highlight active link in sidebar
const linkClass = (path) => [
  "p-2 sm:p-3 rounded flex justify-center sm:justify-start items-center gap-2 transition-colors duration-300 relative group hover:bg-gray-800",
  route.path === path ? "text-blue-500" : "text-white",
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
