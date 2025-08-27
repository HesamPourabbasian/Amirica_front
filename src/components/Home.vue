<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import Batman from "./Batman.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Footer from "./Footer.vue";
import Members from "./Members.vue";

// ✅ register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
  // ✅ initialize smooth scrolling
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, // bigger = smoother
    effects: true, // allows parallax effects later
  });

  // ✅ optional: scroll progress indicator
  gsap.to("#scroll-indicator", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#smooth-content",
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

  <!-- wrapper/content for ScrollSmoother -->
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Batman />
      <Section1 />
      <Section2 />
      <Section3 />
      <Members />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
/* ensure full height */
#smooth-wrapper,
#smooth-content {
  min-height: 100%;
}
</style>
