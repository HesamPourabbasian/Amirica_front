<script setup>
import { ref, onMounted } from "vue";
import membersData from "/Users/hesam/Documents/Projects/Front_End/Vue-Projects/Amirica_front/src/assets/members-data.json";

const members = ref([]);
onMounted(() => {
  members.value = membersData.اعضا; // Use Persian key 'اعضا'
});
</script>

<template>
  <div dir="rtl" class="min-h-screen bg-main-color py-8">
    <h1 class="mr-[6%] mb-8 text-[40px] text-gray-200 font-bold text-right">
      اسامی اعضا
    </h1>

    <ul class="w-[90%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
      <li
        v-for="m in members"
        :key="m.شناسه"
        class="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-xl bg-gray-900/80 border border-sky-500/20 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <router-link :to="`/member/${m.شناسه}`" class="flex items-center gap-4">
          <img
            :src="m.عکس || '/images/default.jpg'"
            :alt="`${m.نام} ${m.نام_خانوادگی}`"
            class="w-14 h-14 rounded-full object-cover border-2 border-sky-400 shadow-md"
          />
          <span class="text-gray-200 font-semibold text-lg tracking-wide">
            {{ m.نام }} {{ m.نام_خانوادگی }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Main color and typography */
:root {
  --main-color: #121929;
  --accent: #4b6cb7;
  --card-bg: rgba(30, 38, 60, 0.85);
  --light-gray: #d1d5db;
}

/* Page background */
.min-h-screen {
  background: linear-gradient(135deg, #121929 0%, #1e263c 100%);
  font-family: "Vazirmatn", "Inter", sans-serif;
}

/* Ensure text is right-aligned for Persian */
h1,
span {
  text-align: right;
}

/* Hover transitions */
div[class*="hover:"] {
  transition: all 0.25s ease-in-out;
}
</style>
