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

// ✅ register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // ✅ scroll progress indicator (no smooth scroll)
  gsap.to("#scroll-indicator", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body", // whole page
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
});
</script>

<template>
  <!-- progress bar -->
  <div
    id="scroll-indicator"
    class="fixed top-0 left-0 right-0 h-[10px] bg-blue-500 origin-left rounded-full scale-x-0"
  />

  <!-- normal content (no smooth-wrapper/content) -->
  <Batman />
  <Section1 />
  <Section2 />
  <Section3 />
  <Members />
  <Footer />
</template>

<style scoped>
/* nothing special needed anymore */
</style>
