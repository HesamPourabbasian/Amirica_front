<template>
  <!-- Top Bar -->
  <div class="h-[80px] bg-[#1c2539]"></div>

  <div class="flex">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content -->
    <div
      class="flex-1 p-8 bg-[#121929] min-h-screen overflow-y-auto font-sans"
      dir="rtl"
    >
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
          <p class="text-3xl font-extrabold text-white">
            {{ stats.abuses }}
          </p>
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
</template>

<script setup>
import AdminSidebar from "./AdminSidebar.vue";
import { reactive } from "vue";

const admin = reactive({
  name: "حسام پورعباسیان",
  title: "ادمین",
  avatar: "https://via.placeholder.com/150",
});

const stats = reactive({
  abuses: 12,
  debt: 450000,
  paid: 1500000,
  score: 87,
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}
@media (max-width:700px) {
  h1 {
    font-size: 20px;
  }
}
::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  background: #121929;
}
</style>
