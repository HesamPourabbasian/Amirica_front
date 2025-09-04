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
  <div dir="rtl" class=" bg-main-color py-8">
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
  padding: clamp(1rem, 4vw, 2rem); /* Responsive padding instead of py-8 */
}

/* Typography adjustments */
h1 {
  text-align: right;
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* Responsive font size (24px–40px) */
  margin-right: clamp(
    2%,
    5vw,
    4%
  ); /* Responsive margin-right instead of mr-[6%] */
  margin-bottom: clamp(
    1rem,
    3vw,
    1.5rem
  ); /* Responsive margin-bottom instead of mb-8 */
  color: var(--light-gray);
  font-weight: bold;
}

span {
  text-align: right;
  font-size: clamp(
    0.875rem,
    2.5vw,
    1.125rem
  ); /* Responsive font size (14px–18px) */
}

/* Container adjustments */
.w-\[90\%\] {
  width: clamp(80%, 90vw, 95%); /* Responsive width instead of fixed 90% */
}

/* Grid adjustments */
ul {
  display: grid;
  gap: clamp(0.75rem, 2vw, 1.5rem); /* Responsive gap instead of gap-6 */
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Adaptive columns */
}

/* Card adjustments */
li {
  padding: clamp(
    0.75rem,
    2vw,
    1.25rem
  ); /* Responsive padding instead of px-6 py-4 */
  background: var(--card-bg);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease-in-out;
}
li:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* Image adjustments */
img {
  width: clamp(2.5rem, 10vw, 4rem); /* Responsive image size (40px–64px) */
  height: clamp(2.5rem, 10vw, 4rem); /* Match width for circular shape */
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Error message */
.text-lg {
  font-size: clamp(
    0.875rem,
    2.5vw,
    1.125rem
  ); /* Responsive font size for error */
}

/* Media queries for smaller screens */
@media (max-width: 640px) {
  ul {
    grid-template-columns: 1fr; /* Single column for small screens */
  }

  li {
    padding: clamp(0.5rem, 1.5vw, 1rem); /* Smaller padding for mobile */
  }

  img {
    width: clamp(2rem, 8vw, 3rem); /* Smaller image for mobile (32px–48px) */
    height: clamp(2rem, 8vw, 3rem);
  }
}

/* Media queries for larger screens */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px; /* Cap container width for large screens */
  }

  ul {
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    ); /* Larger columns for desktop */
  }

  img {
    width: clamp(3rem, 8vw, 4.5rem); /* Larger image for desktop (48px–72px) */
    height: clamp(3rem, 8vw, 4.5rem);
  }
}

/* Ensure hover transitions */
div[class*="hover:"],
li[class*="hover:"] {
  transition: all 0.25s ease-in-out;
}
</style>
