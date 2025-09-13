<template>
  <!-- Top Bar -->
  <div class="h-[80px] bg-gradient-to-b from-pink-900 via-pink-900 to-pink-900"></div>

  <!-- Grid Layout -->
  <div class="grid grid-cols-1 sm:grid-cols-[20%_80%] h-[calc(160vh-80px)] ">
    <!-- Sidebar (desktop only, right side in RTL) -->
    <div dir="rtl" class="hidden sm:block bg-gray-900 overflow-hidden">
      <user-side-bar/>
    </div>

    <!-- Main Content with transition -->
    <div class="p-8 bg-gradient-to-b from-pink-900 via-purple-900 to-purple-950 overflow-y-auto font-sans" dir="rtl">
      <Transition name="fade-slide" mode="out-in">
        <div class="welcome" key="dashboard-content">
          <!-- Welcome -->
          <h1 class="text-xl sm:text-2xl md:text-3xl text-white font-extrabold mb-6">
            سلام {{ admin.name }} 👋 به پنل خودت خوش آمدی
          </h1>

          <!-- Profile Section -->
          <div
              class="flex items-center gap-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 p-6 rounded-2xl shadow-lg mb-10"
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
                class="bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 class="text-gray-100 text-lg mb-2">تعداد فحاشی</h3>
              <p class="text-3xl font-extrabold text-white">{{ stats.abuses }}</p>
            </div>

            <div
                class="bg-gradient-to-tr from-rose-900 via-rose-800 to-rose-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 class="text-gray-100 text-lg mb-2">بدهکاری</h3>
              <p class="text-3xl font-extrabold text-white">
                {{ stats.debt.toLocaleString() }} تومان
              </p>
            </div>

            <div
                class="bg-gradient-to-tr from-emerald-900 via-emerald-800 to-emerald-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 class="text-gray-100 text-lg mb-2">جمع مبلغ پرداخت شده</h3>
              <p class="text-3xl font-extrabold text-white">
                {{ stats.paid.toLocaleString() }} تومان
              </p>
            </div>

            <div
                class="bg-gradient-to-tr from-amber-900 via-amber-800 to-amber-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 class="text-gray-100 text-lg mb-2">امتیاز</h3>
              <p class="text-3xl font-extrabold text-white">{{ stats.score }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <!-- 📱 Mobile Dock -->
  <user-mobile-dock/>

  <!-- 📌 DaisyUI Modal -->
  <dialog id="logoutModalMobile" class="modal">
    <div class="modal-box text-right">
      <h3 class="font-bold text-lg">آیا مطمینید میخواهید خارج شوید؟</h3>
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
import AdminSidebar from "../AdminSidebar.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const admin = reactive({
  name: 'پویا زادمهر',
  title: "ادمین",
  avatar: "/pouya.jpg",
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

/* Page transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}


</style>
