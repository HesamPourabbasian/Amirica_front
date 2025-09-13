<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Highlight active link in sidebar
const linkClass = (path) => [
  "p-2 sm:p-3 rounded flex justify-center sm:justify-start items-center gap-2 transition-colors duration-300 relative group sidebar-link",
  route.path === path ? "text-blue-500" : "text-white",
];

const isActive = (path) => route.path === path;
</script>

<template>
  <!-- Desktop Sidebar -->
  <div
      class="hidden sm:flex side h-full bg-gradient-to-b from-pink-900 via-purple-900 to-purple-950 text-white flex-col p-[5px] sm:p-4 shadow-lg pt-[50px]"
  >
    <h2 class="hidden sm:block text-2xl font-bold mb-6 text-right">
      منوی کاربر
    </h2>

    <router-link :class="linkClass('/user')" to="/user">
      <span class="material-icons-outlined">dashboard</span>
      <span class="hidden sm:inline ml-3"> داشبورد </span>
    </router-link>

    <router-link :class="linkClass('/userProfileEdit')" to="/userProfileEdit">
      <span class="material-icons-outlined">manage_accounts</span>
      <span class="hidden sm:inline ml-3"> ویرایش پروفایل کاربر </span>
    </router-link>

    <router-link :class="linkClass('/userCalEditor')" to="/userCalEditor">
      <span class="material-icons-outlined">calendar_month</span>
      <span class="hidden sm:inline ml-3"> ویرایش تقویم </span>
    </router-link>

    <!-- Logout -->
    <button
        class="p-2 rounded flex items-center gap-2 bg-red-600 hover:bg-red-700 mt-2 sidebar-link logout-btn"
        onclick="document.getElementById('logoutModal').showModal()"
    >
      <span class="material-icons-outlined">logout</span>
      <span class="hidden sm:inline ml-3 text-shadow-white"> خروج </span>
    </button>
  </div>

  <!-- Mobile Dock -->
  <div
      class="sm:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-900 via-purple-900 to-purple-950 text-white shadow-lg"
  >
    <div class="btm-nav h-16 text-xl">
      <router-link to="/admin" :class="{ active: isActive('/admin') }">
        <span class="material-icons-outlined">dashboard</span>
      </router-link>
      <router-link
          to="/edit-profile-admin"
          :class="{ active: isActive('/edit-profile-admin') }"
      >
        <span class="material-icons-outlined">manage_accounts</span>
      </router-link>
      <router-link to="/cal_ed" :class="{ active: isActive('/cal_ed') }">
        <span class="material-icons-outlined">calendar_month</span>
      </router-link>
      <router-link to="/violations" :class="{ active: isActive('/violations') }">
        <span class="material-icons-outlined">gavel</span>
      </router-link>
      <button
          class="text-white sidebar-link logout-btn"
          onclick="document.getElementById('logoutModal').showModal()"
      >
        <span class="material-icons-outlined">logout</span>
      </button>
    </div>
  </div>

  <!-- DaisyUI Modal -->
  <dialog id="logoutModal" class="modal">
    <div class="modal-box text-right">
      <h3 class="font-bold text-lg">آیا مطمئنید میخواهید خارج شوید؟</h3>
      <div class="modal-action">
        <form method="dialog" class="flex gap-2">
          <button class="btn">انصراف</button>
          <router-link to="/" class="btn btn-error">خروج</router-link>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

/* --- Hover + Animation for both Sidebar & Dock --- */
.sidebar-link span,
.btm-nav span {
  transition: transform 0.2s ease, color 0.3s ease;
}

.sidebar-link:hover span,
.btm-nav a:hover span,
.logout-btn:hover span {
  transform: translateY(-4px) scale(1.05);
  color: #60a5fa; /* Tailwind blue-400 */
}

/* Active link blue */
.sidebar-link.router-link-active span,
.btm-nav .active span {
  color: #3b82f6; /* Tailwind blue-500 */
}

/* Logout button white */
.logout-btn span {
  color: #ffffff !important;
}
.logout-btn:hover span {
  color: #ffffff !important;
}
</style>
