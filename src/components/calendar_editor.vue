<template>
  <!-- Topbar -->
  <div class="h-[80px] bg-[#121929] flex items-center px-6"></div>

  <!-- Grid Layout -->
  <div class="grid grid-cols-5 min-h-screen bg-[#121929] text-white">
    <!-- Sidebar (desktop only) -->
    <div class="hidden md:block col-span-1 bg-gray-900/90">
      <AdminSidebar />
    </div>

    <!-- Main Content -->
    <div class="col-span-5 md:col-span-4 p-6 h-[120vh]">
      <!-- Title -->
      <h2
          class="text-4xl font-extrabold mb-12 text-center text-shadow-white"
      >
        ویرایش تقویم
      </h2>

      <!-- Event Form -->
      <div
          class="bg-gray-800/90 text-gray-200 shadow-2xl w-full sm:w-[80%] md:w-[55%] rounded-2xl p-8 mb-12 mx-auto backdrop-blur-md border border-gray-700"
      >
        <label class="block mb-6">
          <span class="text-gray-300 font-semibold">📅 تاریخ ایونت</span>
          <input
              v-model="newEvent.date"
              type="date"
              class="mt-2 w-full rounded-xl bg-gray-900 border-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 px-4 py-3 transition"
          />
        </label>

        <label class="block mb-6">
          <span class="text-gray-300 font-semibold">📝 نام ایونت</span>
          <input
              v-model="newEvent.title"
              type="text"
              placeholder="مثلاً جلسه هفتگی"
              class="mt-2 w-full rounded-xl bg-gray-900 border-gray-700 text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 px-4 py-3 transition"
          />
        </label>

        <button
            @click="addEvent"
            class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-95 transition"
        >
          ➕ ثبت ایونت
        </button>
      </div>

      <!-- Events List -->
      <div
          class="bg-gray-800/90 text-gray-200 p-8 rounded-2xl shadow-2xl w-full sm:w-[80%] md:w-[55%] mx-auto backdrop-blur-md border border-gray-700 mb-12"
      >
        <h3
            class="text-2xl font-bold mb-6 text-indigo-400 flex items-center gap-2"
        >
          📌 ایونت‌های ثبت شده
        </h3>

        <ul v-if="events.length" class="space-y-4">
          <li
              v-for="(event, index) in events"
              :key="index"
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-900/70 border border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div class="mb-2 sm:mb-0">
              <p class="font-semibold text-lg text-gray-200">
                {{ event.title }}
              </p>
              <p class="text-sm text-gray-400">📅 تاریخ: {{ event.date }}</p>
            </div>
            <button
                @click="removeEvent(index)"
                class="text-red-500 hover:text-red-600 font-medium transition"
            >
              ✖ حذف
            </button>
          </li>
        </ul>

        <p v-else class="text-gray-400 text-center italic">
          🚫 هیچ ایونتی ثبت نشده است.
        </p>
      </div>
    </div>
  </div>

  <!-- 🚀 Mobile Dock -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-50">
    <div class="dock bg-gray-900 text-white border-t border-gray-700">
      <div class="dock-item">
        <router-link to="/admin" :class="{ active: isActive('/admin') }">
          <span class="material-icons-outlined"> dashboard </span>
        </router-link>
      </div>
      <div class="dock-item">
        <router-link to="/edit-profile-admin" :class="{ active: isActive('/edit-profile-admin') }">
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
      <!-- 🔴 خروج with modal trigger -->
      <div class="dock-item">
        <button
            class="text-red-400"
            onclick="document.getElementById('logoutModalMobile').showModal()"
        >
          <span class="material-icons-outlined"> logout </span>
        </button>
      </div>
    </div>
  </div>

  <!-- 📌 DaisyUI Modal for mobile logout -->
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

<script>
import { useRoute } from "vue-router";

export default {
  name: "CalendarEditor",
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return { isActive };
  },
  data() {
    return {
      newEvent: {
        date: "",
        title: "",
      },
      events: [],
    };
  },
  methods: {
    addEvent() {
      if (!this.newEvent.date || !this.newEvent.title) return;
      this.events.push({ ...this.newEvent });
      this.newEvent.date = "";
      this.newEvent.title = "";
    },
    removeEvent(index) {
      this.events.splice(index, 1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

body {
  direction: rtl;
}

.dock {
  height: 80px;
  display: flex;
}
.dock-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* highlight active mobile dock link */
.dock :deep(.active) {
  color: #3b82f6; /* blue-500 */
}
</style>
