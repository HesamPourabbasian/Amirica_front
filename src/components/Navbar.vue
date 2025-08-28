<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav
    class="mt-3 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-xl"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/">
            <img
              src="/download.png"
              alt="Logo"
              class="w-[150px] drop-shadow-lg"
            />
          </router-link>
        </div>

        <!-- منو Button -->
        <div>
          <button
            @click="toggleMenu"
            class="px-4 py-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-lg backdrop-blur-md hover:bg-sky-500/40 hover:text-white transition-all font-bold"
          >
            منو
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay (background dim when sidebar open) -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm"
        @click="toggleMenu"
      ></div>
    </transition>

    <!-- Sidebar (Luxury style, from LEFT) -->
    <transition name="slide">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 w-72 h-full bg-gray-900/90 backdrop-blur-xl border-r border-sky-500/30 shadow-2xl flex flex-col p-6 space-y-8 rounded-r-2xl"
      >
        <!-- Close button -->
        <button
          @click="toggleMenu"
          class="text-sky-400 hover:text-white text-xl font-bold self-end transition-all"
        >
          ✕
        </button>

        <!-- Links -->
        <router-link
          to="/"
          class="text-gray-200 hover:text-sky-400 text-lg font-semibold transition-all tracking-wide"
          @click="toggleMenu"
        >
          خانه
        </router-link>
        <a
          href="#"
          class="text-gray-200 hover:text-sky-400 text-lg font-semibold transition-all tracking-wide"
          @click="toggleMenu"
        >
          درباره ما
        </a>
        <router-link
          to="/login"
          class="text-gray-200 hover:text-sky-400 text-lg font-semibold transition-all tracking-wide"
          @click="toggleMenu"
        >
          ورود
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
nav {
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
}
/* Sidebar slide animation (from LEFT) */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Overlay fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
