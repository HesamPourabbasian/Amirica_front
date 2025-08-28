<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleLogin = () => {
  if (!username.value || !password.value) {
    alert("لطفا نام کاربری و رمز عبور را وارد کنید");
    return;
  }
  console.log("Username:", username.value, "Password:", password.value);
  alert(`Logged in as ${username.value}`);
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-6 min-h-screen p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
  >
    <!-- Login Card -->
    <div class="flex-1 flex items-center justify-center">
      <div
        class="bg-gray-900/90 backdrop-blur-xl border border-sky-500/20 shadow-2xl rounded-2xl p-10 w-[380px] flex flex-col gap-6"
      >
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-200 tracking-wide">
            ورود به پنل
          </h1>
        </div>

        <!-- Form -->
        <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
          <div>
            <label class="block text-sm font-medium text-gray-300"
              >نام کاربری</label
            >
            <input
              v-model="username"
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
              class="mt-1 w-full px-4 py-2 rounded-2xl bg-gray-800/50 text-gray-200 border border-sky-500/20 focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-200 shadow-sm"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300"
              >رمز کاربری</label
            >
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="mt-1 w-full px-4 py-2 rounded-2xl bg-gray-800/50 text-gray-200 border border-sky-500/20 focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-200 shadow-sm"
            />
          </div>

          <button
            type="submit"
            class="mt-3 bg-sky-500 text-white font-semibold py-2 rounded-2xl shadow-lg hover:bg-sky-600 transition duration-200"
          >
            ورود
          </button>
        </form>
      </div>
    </div>

    <!-- Illustration -->
    <div class="flex-1 flex items-center justify-center md:block hidden">
      <img
        src="/superman.png"
        alt="illustration"
        class="w-[60%] drop-shadow-2xl rounded-2xl"
      />
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
@media (max-width: 768px) {
  .second-div {
    display: none;
  }
}
</style>
