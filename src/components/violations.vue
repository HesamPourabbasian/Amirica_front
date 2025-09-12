<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
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

// Mobile dock active link
const route = useRoute();
const isActive = (path) => route.path === path;
</script>

<template>
  <!-- Notification -->
  <transition name="fade">
    <div
        v-if="notification.visible"
        class="fixed top-6 right-6 bg-green-500 text-white px-5 py-3 rounded-md shadow-lg font-semibold z-50"
    >
      {{ notification.message }}
    </div>
  </transition>

  <!-- Topbar -->
  <div class="h-[80px] bg-[#121929] "></div>

  <!-- Grid -->
  <div class="grid grid-cols-1 md:grid-cols-[20%_80%] min-h-screen">
    <!-- Sidebar (desktop only) -->
    <div class="hidden md:block">
      <AdminSidebar />
    </div>

    <!-- Main Content -->
    <div class="p-8 bg-[#121929] text-white flex justify-center items-start w-full">
      <div
          class="bg-gray-800/90 p-6 rounded-2xl shadow-2xl max-w-md w-full space-y-6 border border-gray-700 backdrop-blur-md"
      >
        <!-- Title -->
        <h2 class="text-2xl font-bold text-center text-white mb-4">
          ثبت تخلف :
        </h2>

        <!-- User Selection -->
        <div>
          <label class="block mb-2 font-semibold text-gray-200">شناسه کاربر</label>
          <select
              v-model="selectedUser"
              class="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="" disabled>انتخاب کنید</option>
            <option v-for="id in users" :key="id" :value="id">{{ id }}</option>
          </select>
        </div>

        <!-- Foul Count -->
        <div>
          <label class="block mb-2 font-semibold text-gray-200">تعداد فحش</label>
          <input
              type="number"
              min="0"
              v-model="foulCount"
              @input="updatePrice"
              placeholder="مثلاً 3"
              class="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <!-- Total Price -->
        <div class="text-lg font-semibold text-gray-200">
          مجموع:
          <span class="text-green-400"
          >{{ totalPrice.toLocaleString() }} تومان</span
          >
        </div>

        <!-- Submit Button -->
        <button
            @click="submitFoul"
            class="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-95 transition"
        >
          ثبت
        </button>
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
      <!-- 🔴 خروج with modal -->
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

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Dock */
.dock {
  height: 70px;
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
