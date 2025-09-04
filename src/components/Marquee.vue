<script setup>
import { ref } from "vue";

const icons = [
  {
    name: "Apple",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/apple.svg",
  },
  {
    name: "Xiaomi",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/xiaomi.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/github.svg",
  },
  {
    name: "Linux",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/linux.svg",
  },
  {
    name: "Telegram",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/telegram.svg",
  },
  {
    name: "Instagram",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/instagram.svg",
  },
  {
    name: "ChatGPT",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.1.0/icons/openai.svg",
  },
];
</script>

<template>
  <div class="flex items-center justify-center py-6">
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <!-- First set of icons -->
        <div v-for="icon in icons" :key="icon.name" class="marquee-item">
          <img
            :src="icon.src"
            :alt="icon.name"
            class="h-16 w-16 mr-[50px] object-contain icon-white"
          />
        </div>
        <!-- Duplicate set for seamless infinite loop -->
        <div
          v-for="icon in icons"
          :key="'dup-' + icon.name"
          class="marquee-item"
        >
          <img
            :src="icon.src"
            :alt="icon.name"
            class="h-16 w-16 mr-[50px] object-contain icon-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 2rem;
  animation: marquee 15s linear infinite;
}

.marquee-item {
  flex: 0 0 auto;
}

.icon-white {
  filter: brightness(0) invert(1);
}

/* Keyframes for smooth left-to-right scroll */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
