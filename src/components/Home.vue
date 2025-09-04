<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Batman from "./Batman.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Footer from "./Footer.vue";
import Members from "./Members.vue";
import Marquee from "./Marquee.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // scroll progress indicator
  gsap.to("#scroll-indicator", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
});
</script>

<template>
  <!-- neon progress bar -->
  <div
    id="scroll-indicator"
    class="fixed top-0 left-0 right-0 h-2 bg-sky-500/80 shadow-[0_0_15px_rgba(14,165,233,0.7)] origin-left rounded-full scale-x-0 z-50"
  />

  <!-- page wrapper with luxury gradient background -->
  <div
    class="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 transition-all"
  >
    <Batman class="mb-16" />
    <Section1 class="mb-16" />
    <Section2 class="mb-16" />
    <Section3 class="mb-16" />
    <Marquee class="mb-16" />
    <Members class="mb-16" />
    <Footer />
  </div>
</template>

<style scoped>
/* Optional: subtle glow for scroll bar animation */
#scroll-indicator {
  transition: background 0.3s, box-shadow 0.3s;
}
</style>
