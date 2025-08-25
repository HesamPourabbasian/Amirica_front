<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Right side (Logo) -->
        <div class="flex-shrink-0">
          <router-link to="/">
            <img src="/download.png" alt="Logo" class="w-[200px]" />
          </router-link>
        </div>

        <!-- Left side (Links) -->
        <div class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-500 transition"
            >درباره ما</a
          >
          <router-link
            to="/login"
            class="text-gray-700 hover:text-blue-500 transition"
          >
            ورود
          </router-link>
        </div>

        <!-- Mobile hamburger button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
        <a href="#" class="block text-gray-700 hover:text-blue-500 transition"
          >خانه</a
        >
        <a href="#" class="block text-gray-700 hover:text-blue-500 transition"
          >درباره ما</a
        >
        <router-link
          to="/login"
          class="block text-gray-700 hover:text-blue-500 transition"
          ><a>ورود</a>
        </router-link>
      </div>
    </transition>
  </nav>
</template>
<style scoped>
/* Smooth dropdown animation */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
nav {
  position: sticky;
  top: 10px; /* distance from the top */
  margin: 0 auto; /* center horizontally */
  backdrop-filter: blur(0px) saturate(88%);
  -webkit-backdrop-filter: blur(0px) saturate(88%);
  background-color: rgba(255, 255, 255, 0.74);
  border-radius: 50px;
  width: 95%;
  border: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 999; /* keep it above content */
}
@media (max-width: 768px) {
  img {
    width: 120px;
  }
  nav {
    border: none;
  }
}
</style>
