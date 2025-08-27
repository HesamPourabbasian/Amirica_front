<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";

const results = ref([]);

// Store local icons (from /public/icons/)
const icons = ["/statics.svg", "/swear.svg", "/member.svg", "/dollar.svg"];

onMounted(async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4"
    );
    results.value = await res.json();

    // wait until DOM is updated
    await nextTick();

    // Select all cards
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      // move up on hover
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -12,
          duration: 0.1,
          ease: "power2.out",
        });
      });

      // reset on mouse leave
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
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
        class="card bg-sky-200 rounded-2xl shadow-lg p-4 md:p-6 transition flex flex-col items-center text-center min-h-40 md:min-h-60 overflow-hidden cursor-pointer"
      >
        <!-- Centered icon -->
        <img
          :src="icons[index % icons.length]"
          alt="card icon"
          class="w-12 h-12 mb-3"
        />

        <!-- Card content -->
        <h2 class="text-[20px] font-bold text-gray-800 mb-2 truncate"></h2>
        <p class="text-gray-600 text-xs md:text-sm line-clamp-3"></p>
      </div>
    </div>
  </div>
</template>
