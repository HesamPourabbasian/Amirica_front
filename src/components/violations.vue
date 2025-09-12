<script setup>
import { ref, reactive } from "vue";
import AdminSidebar from "./AdminSidebar.vue";

const selectedUser = ref("");
const foulCount = ref(0);
const totalPrice = ref(0);

const users = Array.from({ length: 9 }, (_, i) => i + 1);

const notification = reactive({
  message: "",
  visible: false,
});

const updatePrice = () => {
  const count = parseInt(foulCount.value);
  totalPrice.value = isNaN(count) ? 0 : count * 50000;
};

const showNotification = (msg) => {
  notification.message = msg;
  notification.visible = true;
  setTimeout(() => {
    notification.visible = false;
  }, 3000);
};

const submitFoul = () => {
  if (!selectedUser.value) {
    showNotification("لطفاً شناسه کاربر را انتخاب کنید.");
    return;
  }

  showNotification(`کاربر ${selectedUser.value} با موفقیت ثبت شد!`);

  selectedUser.value = "";
  foulCount.value = 0;
  totalPrice.value = 0;
};
</script>

<template>
  <!-- نوتیفیکیشن بیرون از گرید -->
  <transition name="fade">
    <div
      v-if="notification.visible"
      class="fixed top-6 right-6 bg-green-500 text-white px-5 py-3 rounded-md shadow-lg font-semibold z-50"
    >
      {{ notification.message }}
    </div>
  </transition>

  <div class="h-[70px] bg-[#121929]"></div>

  <div class="grid grid-cols-[20%_80%] min-h-screen">
    <!-- سایدبار -->
    <AdminSidebar />

    <!-- بخش ثبت خلافی -->
    <div class="p-8 bg-[#1b1f2a] text-white">
      <h2 class="text-3xl font-bold mb-8">ثبت خلافی کاربر</h2>

      <div class="bg-[#2c2f3a] p-6 rounded-lg shadow-lg max-w-md space-y-6">
        <!-- انتخاب شناسه کاربر -->
        <div>
          <label class="block mb-2 font-semibold text-gray-200"
            >شناسه کاربر</label
          >
          <select
            v-model="selectedUser"
            class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>انتخاب کنید</option>
            <option v-for="id in users" :key="id" :value="id">{{ id }}</option>
          </select>
        </div>

        <!-- تعداد فحش -->
        <div>
          <label class="block mb-2 font-semibold text-gray-200"
            >تعداد فحش</label
          >
          <input
            type="number"
            min="0"
            v-model="foulCount"
            @input="updatePrice"
            placeholder="مثلاً 3"
            class="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- مبلغ کل -->
        <div class="text-lg font-semibold text-gray-100">
          مجموع:
          <span class="text-green-400"
            >{{ totalPrice.toLocaleString() }} تومان</span
          >
        </div>

        <!-- دکمه ثبت -->
        <button
          @click="submitFoul"
          class="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-bold transition-colors"
        >
          ثبت
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
