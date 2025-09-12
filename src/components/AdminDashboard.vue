<template>
  <!-- Top Bar -->
  <div class="h-[80px] bg-[#121929]"></div>

  <!-- Grid Layout -->
  <div class="grid grid-cols-1 sm:grid-cols-[20%_80%] h-[calc(100vh-80px)]">
    <!-- Sidebar (desktop only, right side in RTL) -->
    <div dir="rtl" class="hidden sm:block bg-gray-900 overflow-hidden">
      <AdminSidebar />
    </div>

    <!-- Main Content -->
    <div class="p-8 bg-[#121929] overflow-y-auto font-sans" dir="rtl">
      <!-- Welcome -->
      <h1 class="welcome text-3xl text-white font-extrabold mb-6">
        سلام {{ admin.name }} 👋 به پنل خودت خوش آمدی
      </h1>

      <!-- Profile Section -->
      <div
          class="flex items-center gap-6 bg-[#1c2539] p-6 rounded-2xl shadow-lg mb-10"
      >
        <img
            :src="admin.avatar"
            alt="Admin Avatar"
            class="w-20 h-20 rounded-full border-4 border-indigo-400 shadow-md"
        />
        <div>
          <h2 class="text-xl text-amber-50 font-semibold">{{ admin.name }}</h2>
          <p class="text-amber-200">{{ admin.title }}</p>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
            class="bg-gradient-to-tr from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <h3 class="text-gray-100 text-lg mb-2">تعداد فحاشی</h3>
          <p class="text-3xl font-extrabold text-white">{{ stats.abuses }}</p>
        </div>

        <div
            class="bg-gradient-to-tr from-rose-500 to-rose-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <h3 class="text-gray-100 text-lg mb-2">بدهکاری</h3>
          <p class="text-3xl font-extrabold text-white">
            {{ stats.debt.toLocaleString() }} تومان
          </p>
        </div>

        <div
            class="bg-gradient-to-tr from-emerald-500 to-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <h3 class="text-gray-100 text-lg mb-2">جمع مبلغ پرداخت شده</h3>
          <p class="text-3xl font-extrabold text-white">
            {{ stats.paid.toLocaleString() }} تومان
          </p>
        </div>

        <div
            class="bg-gradient-to-tr from-amber-500 to-amber-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <h3 class="text-gray-100 text-lg mb-2">امتیاز</h3>
          <p class="text-3xl font-extrabold text-white">{{ stats.score }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Dock (DaisyUI) -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50">
    <div class="dock bg-gray-900 text-white">
      <div class="dock-item">
        <router-link to="/admin" :class="{ active: isActive('/admin') }">
          <span class="material-icons-outlined"> dashboard </span>
        </router-link>
      </div>
      <div class="dock-item">
        <router-link
            to="/edit-profile-admin"
            :class="{ active: isActive('/edit-profile-admin') }"
        >
          <span class="material-icons-outlined"> manage_accounts </span>
        </router-link>
      </div>
      <div class="dock-item">
        <router-link to="/cal_ed" :class="{ active: isActive('/cal_ed') }">
          <span class="material-icons-outlined"> calendar_month </span>
        </router-link>
      </div>
      <div class="dock-item">
        <router-link to="/violations" :class="{ active: isActive('/violations') }">
          <span class="material-icons-outlined"> gavel </span>
        </router-link>
      </div>
      <div class="dock-item">
        <router-link to="/" class="text-red-400">
          <span class="material-icons-outlined"> logout </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from "./AdminSidebar.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const admin = reactive({
  name: "حسام پورعباسیان",
  title: "ادمین",
  avatar: "https://via.placeholder.com/150",
});

const stats = reactive({
  abuses: 0,
  debt: 0,
  paid: 0,
  score: 0,
});

const isActive = (path) => route.path === path;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

.dock {
  height: 80px;
}

.dock-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dock :deep(.active) {
  color: #3b82f6; /* blue-500 */
}
</style>
