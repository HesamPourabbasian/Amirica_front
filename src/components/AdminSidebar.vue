<template>
  <div
    class="side h-full bg-gray-900 text-white flex flex-col p-[5px] sm:p-4 shadow-lg pt-[50px]"
    
  >
    <!-- Header only on large screens -->
    <h2 class="hidden sm:block text-2xl font-bold mb-6 text-right">
      منوی ادمین
    </h2>

    <!-- Dashboard -->
    <router-link :class="linkClass('/admin')" to="/admin">
      <span
        class="material-icons-outlined text-gray-200 group-hover:text-white transition-colors"
      >
        dashboard
      </span>
      <span
        class="hidden sm:inline ml-3 font-medium group-hover:text-white transition-colors"
      >
        داشبورد
      </span>
      <span
        v-if="isActive('/admin')"
        class="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-tr rounded-br"
      ></span>
    </router-link>

    <!-- Edit Profile -->
    <router-link
      :class="linkClass('/edit-profile-admin')"
      to="/edit-profile-admin"
    >
      <span
        class="material-icons-outlined text-gray-200 group-hover:text-white transition-colors"
      >
        manage_accounts
      </span>
      <span
        class="hidden sm:inline ml-3 font-medium group-hover:text-white transition-colors"
      >
        ویرایش پروفایل ادمین
      </span>
      <span
        v-if="isActive('/edit-profile-admin')"
        class="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-tr rounded-br"
      ></span>
    </router-link>

    <!-- Calendar Edit -->
    <router-link :class="linkClass('/cal_ed')" to="/cal_ed">
      <span
        class="material-icons-outlined text-gray-200 group-hover:text-white transition-colors"
      >
        calendar_month
      </span>
      <span
        class="hidden sm:inline ml-3 font-medium group-hover:text-white transition-colors"
      >
        ویرایش تقویم
      </span>
      <span
        v-if="isActive('/cal_ed')"
        class="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-tr rounded-br"
      ></span>
    </router-link>

    <!-- Violations -->
    <router-link :class="linkClass('/violations')" to="/violations">
      <span
        class="material-icons-outlined text-gray-200 group-hover:text-white transition-colors"
      >
        gavel
      </span>
      <span
        class="hidden sm:inline ml-3 font-medium group-hover:text-white transition-colors"
      >
        ثبت خلافی کاربران
      </span>
      <span
        v-if="isActive('/violations')"
        class="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-tr rounded-br"
      ></span>
    </router-link>

    <!-- Logout -->
    <router-link
      class="p-2 rounded flex justify-center sm:justify-start items-center gap-2 transition-all duration-300 bg-red-600 hover:bg-red-700 group relative mt-2"
      to="/"
    >
      <span
        class="material-icons-outlined text-gray-200 group-hover:text-white transition-colors"
      >
        logout
      </span>
      <span
        class="hidden sm:inline ml-3 font-medium group-hover:text-white transition-colors"
      >
        خروج
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const linkClass = () => [
  "p-2 sm:p-3 rounded flex justify-center sm:justify-start items-center gap-2 transition-colors duration-300 relative group hover:bg-gray-800",
];

const isActive = (path) => computed(() => route.path === path).value;
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");
.side {
  padding-top: 50px;
  padding-right: 20px !important;
}

</style>
