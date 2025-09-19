<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";

const carouselRef = ref(null);
const users = ref([
  { id: 1, name: "حسام پورعباسیان", avatar: "/hesam.jpg", note: "ادامه بده، حتی قدم‌های کوچک هم اهمیت دارند." },
  { id: 2, name: "مهدی دولتی", avatar: "https://avatars.githubusercontent.com/u/140939231?v=4", note: "موفقیت روز به روز ساخته می‌شود، عجله نکن." },
  { id: 3, name: "محمد جمالی", avatar: "https://avatars.githubusercontent.com/u/97102957?v=4", note: "خلاقیت یعنی وقتی هوش سرگرم می‌شود." },
  { id: 4, name: "پویا زادمهر", avatar: "/pouya.jpg", note: "ثبات همیشه از شدت مؤثرتر است." },
  { id: 5, name: "پویا چنگ آرا", avatar: "/poua2.jpg", note: "چیزهای بزرگ هیچ‌وقت از منطقه‌ی راحتی نمی‌آیند." },
  { id: 6, name: "سینا علیزاد", avatar: "/sina.jpg", note: "انضباط یعنی انتخاب چیزی که بیشتر می‌خواهی به جای چیزی که همین الان می‌خواهی." },
  { id: 7, name: "امین فلاح", avatar: "/amin.jpg", note: "بزرگ رویا ببین، اما کوچک شروع کن و همین حالا عمل کن." },
  { id: 8, name: "محمد حسن زاده", avatar: "/mmd2.jpg", note: "آینده‌ات وابسته به کاری است که امروز انجام می‌دهی." },
  { id: 9, name: "الیار رنجبر", avatar: "", note: "خوشبختی از خانه شروع می‌شود—قدردان چیزهای کوچک باش." }
]);

const scrollLeft = () => {
  carouselRef.value.scrollBy({ left: -240, behavior: "smooth" });
};
const scrollRight = () => {
  carouselRef.value.scrollBy({ left: 240, behavior: "smooth" });
};

onMounted(async () => {
  await nextTick();
  const cards = document.querySelectorAll(".profile-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        scale: 1.04,
        boxShadow: "0 10px 24px rgba(56, 189, 248, 0.35)",
        duration: 0.28,
        ease: "power2.out",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
        duration: 0.32,
        ease: "power2.inOut",
      });
    });
  });
});
</script>

<template>
  <!-- Gradient background -->
  <div class="w-full  relative  bg-[url('/web.png')] bg-no-repeat bg-right-top bg-contain">
    <div class="container mx-auto sm:px-6 py-12 relative">
      <div class="w-full">
        <h1 class="text-center md:text-right text-[34px] font-bold">یادداشت های کاربران</h1>
      </div>

      <!-- Navigation Buttons -->
      <button
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-sky-600/90 text-white p-3 rounded-full shadow-lg hover:bg-sky-500 transition-all duration-300 z-20"
          @click="scrollLeft"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-600/90 text-white p-3 rounded-full shadow-lg hover:bg-sky-500 transition-all duration-300 z-20"
          @click="scrollRight"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Carousel -->
      <div
          ref="carouselRef"
          class="flex overflow-x-auto scroll-smooth no-scrollbar py-6 space-x-6"
      >
        <div class="flex-shrink-0 w-3 lg:w-6"></div>

        <!-- Cards -->
        <div
            v-for="user in users"
            :key="user.id"
            class="flex-shrink-0"
        >
          <div
              class="profile-card w-56 h-72 bg-gray-800/60 backdrop-blur-xl
                   border border-sky-400/30 rounded-2xl p-5
                   flex flex-col items-center text-center
                   cursor-pointer transition-all duration-300"
          >
            <!-- Avatar -->
            <div class="p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 rounded-full shadow-md mb-4">
              <img
                  :src="user.avatar || '/default-avatar.png'"
                  alt="avatar"
                  class="w-20 h-20 rounded-full object-cover border-2 border-gray-900"
              />
            </div>

            <!-- Name -->
            <h2 class="text-base font-semibold text-white mb-2 tracking-wide">
              {{ user.name }}
            </h2>

            <!-- Note -->
            <p class="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">
              {{ user.note }}
            </p>
          </div>
        </div>

        <div class="flex-shrink-0 w-3 lg:w-6"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
