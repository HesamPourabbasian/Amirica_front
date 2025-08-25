<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleLogin = () => {
  if (!username.value || !password.value) {
    alert("لطفا نام کاربری و رمز عبور را وارد کنید");
    return;
  }
  // For now just log it (later you can connect to backend)
  console.log("Username:", username.value, "Password:", password.value);
  alert(`Logged in as ${username.value}`);
};
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 p-4">
    <!-- First Div -->
    <div class="flex-1">
      <div
        class="login min-h-screen flex items-center justify-center bg-[#FFF8DC]"
      >
        <!-- Card -->
        <div
          class="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-[380px] flex flex-col gap-6 border border-gray-200"
        >
          <!-- Header -->
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-800">ورود به پنل</h1>
          </div>

          <!-- Form -->
          <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >نام کاربری</label
              >
              <input
                v-model="username"
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                class="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >رمز کاربری</label
              >
              <input
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              class="mt-2 bg-yellow-500 text-white font-semibold py-2 rounded-xl shadow-md hover:bg-yellow-600 transition duration-200"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Second Div -->
    <div class="second-div flex-1 ">
      <img class="w-[60%]" src="/superman.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff8dc;
  width: 100%;
  max-width: 1590px;
  margin: auto;
}
@media (max-width: 768px) {
  .login {
    padding: 20px;
  }
  .second-div {
   display: none;
  }
}
</style>
