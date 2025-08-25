<script setup>
import Batman from "./Batman.vue";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import { motion, useScroll } from "motion-v";

const { scrollYProgress } = useScroll();

/**
 * ==============   Styles   ================
 */

const scrollIndicator = {
  scaleX: scrollYProgress,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "10px",
  originX: 0,
  backgroundColor: "Blue",
  borderRadius: "50px",
};
</script>

<template>
  <motion.div id="scroll-indicator" :style="scrollIndicator" />

  <div>
    <Batman />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>

<style scoped></style>
