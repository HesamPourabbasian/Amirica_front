<template>
    <div class="h-[70px] bg-[#121929]"></div>

  <div class="flex">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="flex-1 p-6 pt-[100px] h-[100vh] bg-[#121929]">
      <!-- خوش‌آمدگویی -->
      <h1 class="text-2xl text-white font-bold mb-4">
        سلام {{ admin.name }} 👋 به پنل خودت خوش آمدی
      </h1>

      <!-- پروفایل -->
      <div class="flex items-center space-x-4 mb-6">
        <img
          :src="admin.avatar"
          alt="Admin Avatar"
          class="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 class="text-xl text-amber-50 font-semibold">{{ admin.name }}</h2>
          <p class="text-amber-100">{{ admin.title }}</p>
        </div>
      </div>

      <!-- کارت‌ها -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h3 class="text-gray-600">تعداد فحاشی</h3>
          <p class="text-2xl font-bold">{{ stats.abuses }}</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="text-gray-600">بدهکاری</h3>
          <p class="text-2xl font-bold">{{ stats.debt }} تومان</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="text-gray-600">جمع مبلغ پرداخت شده</h3>
          <p class="text-2xl font-bold">{{ stats.paid }} تومان</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h3 class="text-gray-600">امتیاز</h3>
          <p class="text-2xl font-bold">{{ stats.score }}</p>
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
  avatar: "https://via.placeholder.com/150", // اینو میشه بعداً از دیتابیس گرفت
});

const stats = reactive({
  abuses: 12,
  debt: 450000,
  paid: 1500000,
  score: 87,
});
</script>
<style scoped>
body {
  background-color: #121929;
}
</style>
