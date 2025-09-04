<script setup>
import { ref, onMounted } from "vue";

const members = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const data = await import("@/assets/members-data.json");
    members.value = data.default?.اعضا || [];
    if (!members.value.length) {
      error.value = "هیچ عضوی یافت نشد";
    }
  } catch (err) {
    error.value = "خطا در بارگذاری اطلاعات اعضا";
    console.error("Failed to load members data:", err);
  }
});
</script>

<template>
  <div dir="rtl" class="min-h-screen bg-main-color py-8">
    <h1 class="mr-[6%] mb-8 text-[40px] text-gray-200 font-bold text-right">
      اسامی اعضا
    </h1>

    <div v-if="error" class="w-[90%] mx-auto text-center text-red-400 text-lg">
      {{ error }}
    </div>
    <ul v-else class="w-[90%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
      <li
        v-for="m in members"
        :key="m.شناسه"
        class="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-xl bg-gray-900/80 border border-sky-500/20 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <router-link
          :to="`/member/${m.شناسه}`"
          class="flex items-center gap-4 w-full"
        >
          <img
            :src="m.عکس || '/images/default.jpg'"
            :alt="`${m.نام || ''} ${m.نام_خانوادگی || ''}`.trim()"
            class="w-14 h-14 rounded-full object-cover border-2 border-sky-400 shadow-md"
            loading="lazy"
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
:root {
  --main-color: #121929;
  --accent: #4b6cb7;
  --card-bg: rgba(30, 38, 60, 0.85);
  --light-gray: #d1d5db;
}

.min-h-screen {
  background-color: var(--main-color);
}

h1,
span {
  text-align: right;
}

div[class*="hover:"],
li[class*="hover:"] {
  transition: all 0.25s ease-in-out;
}
</style>
