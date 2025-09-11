<template>
  <div class="w-[20%] sm:w-64 bg-gray-800 text-white flex flex-col p-2 sm:p-4 space-y-4 pt-[100px] sm:pt-0">

    <h2 class="hidden sm:block text-xl font-bold mb-4 text-right pt-[100px]">
      منوی ادمین
    </h2>

    <!-- داشبورد -->
    <router-link
        :class="linkClass('/admin')"
        to="/admin"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"/>
      </svg>
      <span class="hidden sm:inline">داشبورد</span>
    </router-link>

    <!-- ویرایش پروفایل -->
    <router-link
        :class="linkClass('/edit-profile-admin')"
        to="/edit-profile-admin"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
      <span class="hidden sm:inline">ویرایش پروفایل ادمین</span>
    </router-link>

    <!-- ویرایش تقویم -->
    <router-link
        :class="linkClass('/cal_ed')"
        to="/cal_ed"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <span class="hidden sm:inline">ویرایش تقویم</span>
    </router-link>

    <!-- ثبت خلافی کاربران -->
    <router-link
        :class="linkClass('/violations')"
        to="/violations"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6h13v6M9 17h13M9 17l-3.5-3.5M9 11L5.5 7.5"/>
      </svg>
      <span class="hidden sm:inline">ثبت خلافی کاربران</span>
    </router-link>

    <!-- خروج -->
    <router-link
        :class="[
          'p-2 rounded flex justify-center sm:justify-start items-center gap-2 mt-auto transition-colors duration-500',
          'bg-red-600 hover:bg-red-700'
        ]"
        to="/"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7"/>
      </svg>
      <span class="hidden sm:inline">خروج</span>
    </router-link>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const linkClass = (path) => {
  const isActive = computed(() => route.path === path);
  return [
    'p-2 rounded flex justify-center sm:justify-start items-center gap-2 transition-colors duration-500',
    isActive.value ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
  ];
};
</script>
