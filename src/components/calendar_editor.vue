<template>
  <div class="h-[70px] bg-[#121929]"></div>
  <div class="flex min-h-screen bg-[#121929] text-white">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="flex-1 p-6 pt-[100px]">
      <!-- Title -->
      <h2
        class="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
      >
        ویرایش تقویم
      </h2>

      <!-- Event Form -->
      <div
        class="bg-white text-gray-800 shadow-xl w-full sm:w-[80%] md:w-[50%] rounded-2xl p-6 mb-10 mx-auto transition hover:shadow-2xl"
      >
        <label class="block mb-5">
          <span class="text-gray-700 font-semibold">📅 تاریخ ایونت</span>
          <input
            v-model="newEvent.date"
            type="date"
            class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
          />
        </label>

        <label class="block mb-5">
          <span class="text-gray-700 font-semibold">📝 نام ایونت</span>
          <input
            v-model="newEvent.title"
            type="text"
            placeholder="مثلاً جلسه هفتگی"
            class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
          />
        </label>

        <button
          @click="addEvent"
          class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition"
        >
          ثبت ایونت
        </button>
      </div>

      <!-- Events List -->
      <div
        class="bg-white text-gray-800 p-6 rounded-2xl shadow-xl w-full sm:w-[80%] md:w-[50%] mx-auto"
      >
        <h3 class="text-xl font-bold mb-5 text-indigo-700">
          📌 ایونت‌های ثبت شده
        </h3>
        <ul v-if="events.length" class="space-y-4">
          <li
            v-for="(event, index) in events"
            :key="index"
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div class="mb-2 sm:mb-0">
              <p class="font-semibold text-lg text-gray-900">
                {{ event.title }}
              </p>
              <p class="text-sm text-gray-500">تاریخ: {{ event.date }}</p>
            </div>
            <button
              @click="removeEvent(index)"
              class="text-red-500 hover:text-red-600 font-medium"
            >
              ✖ حذف
            </button>
          </li>
        </ul>
        <p v-else class="text-gray-500 text-center italic">
          هیچ ایونتی ثبت نشده است.
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
  font-family: "Vazirmatn", sans-serif;
}
</style>
