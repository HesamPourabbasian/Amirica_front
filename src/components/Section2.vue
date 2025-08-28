<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";

const results = ref([]);
const icons = ["/statics.svg", "/swear.svg", "/member.svg", "/dollar.svg"];

onMounted(async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4"
    );
    results.value = await res.json();

    await nextTick();

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -12,
          boxShadow: "0 20px 30px rgba(14, 165, 233, 0.4)", // skyblue glow
          duration: 0.2,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="container mx-auto p-6 mt-[60px]">
    <div class="cards grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in results"
        :key="item.id"
        class="card relative bg-gray-900/90 backdrop-blur-xl border border-sky-500/20 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:scale-105"
      >
        <!-- Icon with glow -->
        <div class="p-4 bg-gray-800/40 rounded-full shadow-md mb-4">
          <img
            :src="icons[index % icons.length]"
            alt="card icon"
            class="w-12 h-12 filter drop-shadow-lg"
          />
        </div>

        <!-- Card content -->
        <h2
          class="text-lg md:text-xl font-bold text-gray-200 mb-2 truncate"
        ></h2>
        <p class="text-gray-400 text-xs md:text-sm line-clamp-3"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: smooth transition for hover scale */
.card {
  transition: all 0.25s ease;
}
</style>
