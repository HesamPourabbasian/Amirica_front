<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

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

const marquee = ref(null);

onMounted(() => {
  const content = marquee.value;

  // Get width of first half (original list)
  const firstHalfWidth = Array.from(content.children)
    .slice(1, icons.length)
    .reduce((sum, item) => sum + item.offsetWidth, 0);

  // Animate continuously
  gsap.to(content, {
    x: -firstHalfWidth,
    duration: 10,
    ease: "linear",
    repeat: 1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % firstHalfWidth),
    },
  });
});
</script>

<template>
  <div class="flex items-center justify-center py-6">
    <div class="marquee-container w-full">
      <div class="marquee-content" ref="marquee">
        <!-- First set of icons -->
        <div class="marquee-item" v-for="icon in icons" :key="icon.name">
          <img
            :src="icon.src"
            :alt="icon.name"
            class="h-16 w-16 object-contain icon-white"
          />
        </div>
        <!-- Duplicate for seamless loop -->
        <div
          class="marquee-item"
          v-for="icon in icons"
          :key="'dup-' + icon.name"
        >
          <img
            :src="icon.src"
            :alt="icon.name"
            class="h-16 w-16 object-contain icon-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-content {
  display: inline-flex;
  align-items: center;
}
.marquee-item {
  flex: 0 0 auto;
  margin: 0 2rem;
}
.icon-white {
  filter: brightness(0) invert(1); /* Makes monochrome SVGs white */
}
</style>
