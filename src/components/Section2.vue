<script setup>
import { ref, onMounted } from "vue";

const results = ref([]);

// Store local icons (from /public/icons/)
const icons = [
  "/statics.svg",
  "/swear.svg",
  "/member.svg",
  "/dollar.svg",
];

// Example fetch (replace with your backend API)
onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
    results.value = await res.json();
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
        class="bg-[#C3ADD2] rounded-2xl shadow-lg p-4 md:p-6 hover:shadow-xl transition flex flex-col items-center text-center min-h-40 md:min-h-60 overflow-hidden"
      >
        <!-- Centered icon -->
        <img
          :src="icons[index % icons.length]"
          alt="card icon"
          class="w-12 h-12 mb-3"
        />

        <!-- Card content -->
        <h2 class="text-[20px] font-bold text-gray-800 mb-2 truncate">
        </h2>
        <p class="text-gray-600 text-xs md:text-sm line-clamp-3">
        </p>
      </div>
    </div>
  </div>
</template>
