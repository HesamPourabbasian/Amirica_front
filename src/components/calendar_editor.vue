<template>
  <!-- Topbar -->
  <div class="h-[80px] bg-[#121929] shadow-md flex items-center px-6"></div>

  <!-- Grid Layout -->
  <div class="grid grid-cols-5 min-h-screen bg-gradient-to-br from-[#121929] via-[#1b2436] to-[#121929] text-white">
    <!-- Sidebar -->
    <div class="col-span-1 bg-gray-900/90 backdrop-blur-md border-r border-gray-800 shadow-lg h-screen sticky top-0">
      <AdminSidebar />
    </div>

    <!-- Main Content -->
    <div class="col-span-4 p-6  h-screen ">
      <!-- Title -->
      <h2
        class="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
      >
        ویرایش تقویم
      </h2>

      <!-- Event Form -->
      <div
        class="bg-white/90 text-gray-800 shadow-2xl w-full sm:w-[80%] md:w-[55%] rounded-2xl p-8 mb-12 mx-auto backdrop-blur-md border border-gray-200"
      >
        <label class="block mb-6">
          <span class="text-gray-700 font-semibold">📅 تاریخ ایونت</span>
          <input
            v-model="newEvent.date"
            type="date"
            class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 px-4 py-3 transition"
          />
        </label>

        <label class="block mb-6">
          <span class="text-gray-700 font-semibold">📝 نام ایونت</span>
          <input
            v-model="newEvent.title"
            type="text"
            placeholder="مثلاً جلسه هفتگی"
            class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 px-4 py-3 transition"
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
        class="bg-white/90 text-gray-800 p-8 rounded-2xl shadow-2xl w-full sm:w-[80%] md:w-[55%] mx-auto backdrop-blur-md border border-gray-200 mb-12"
      >
        <h3 class="text-2xl font-bold mb-6 text-indigo-700 flex items-center gap-2">
          📌 ایونت‌های ثبت شده
        </h3>

        <ul v-if="events.length" class="space-y-4">
          <li
            v-for="(event, index) in events"
            :key="index"
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50/70 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div class="mb-2 sm:mb-0">
              <p class="font-semibold text-lg text-gray-900">
                {{ event.title }}
              </p>
              <p class="text-sm text-gray-500">📅 تاریخ: {{ event.date }}</p>
            </div>
            <button
              @click="removeEvent(index)"
              class="text-red-500 hover:text-red-600 font-medium transition"
            >
              ✖ حذف
            </button>
          </li>
        </ul>

        <p v-else class="text-gray-500 text-center italic">
          🚫 هیچ ایونتی ثبت نشده است.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEditor",
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
body {
  direction: rtl;
}
</style>
