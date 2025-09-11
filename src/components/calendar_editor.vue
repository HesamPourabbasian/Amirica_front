<template>
  <div class="h-[70px] bg-[#121929]"></div>
  <div class="flex">
    <AdminSidebar />
    <div class="w-[85%] h-[100vh] p-6 pt-[100px] bg-[#121929]">
      <!-- عنوان -->
      <h2 class="text-2xl text-amber-50 font-bold mb-6 text-center">ویرایش تقویم</h2>

      <!-- فرم افزودن ایونت -->
<!-- فرم افزودن ایونت -->
<div
  class="bg-white shadow-md w-full sm:w-[80%] md:w-[50%] rounded-2xl p-6 mb-8 mx-auto"
>
  <label class="block mb-4">
    <span class="text-gray-700">تاریخ ایونت</span>
    <input
      v-model="newEvent.date"
      type="date"
      class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </label>

  <label class="block mb-4">
    <span class="text-gray-700">نام ایونت</span>
    <input
      v-model="newEvent.title"
      type="text"
      placeholder="مثلاً جلسه هفتگی"
      class="mt-2 w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </label>

  <button
    @click="addEvent"
    class="w-full py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
  >
    ثبت ایونت
  </button>
</div>

<!-- لیست ایونت‌ها -->
<div
  class="bg-gray-50 p-4 rounded-2xl shadow-md w-full sm:w-[80%] md:w-[50%] mx-auto"
>
  <h3 class="text-xl font-semibold mb-4">ایونت‌های ثبت شده</h3>
  <ul v-if="events.length" class="space-y-3">
    <li
      v-for="(event, index) in events"
      :key="index"
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl p-3 shadow-sm"
    >
      <div class="mb-2 sm:mb-0">
        <p class="font-medium">{{ event.title }}</p>
        <p class="text-sm text-gray-500">تاریخ: {{ event.date }}</p>
      </div>
      <button
        @click="removeEvent(index)"
        class="text-red-500 hover:text-red-700"
      >
        حذف
      </button>
    </li>
  </ul>
  <p v-else class="text-gray-500 text-center">هیچ ایونتی ثبت نشده است.</p>
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
  font-family: sans-serif;
}

</style>
