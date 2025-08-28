<script setup>
const members = [
  { name: "حسام پورعباسیان", img: "/meme.jpg" },
  { name: "مهدی دولتی", img: "/meme.jpg" },
  { name: "پویا زادمهر", img: "/meme.jpg" },
  { name: "محمد جمالی", img: "/meme.jpg" },
  { name: "محمد حسن زاده", img: "/meme.jpg" },
  { name: "امین فلاح", img: "/meme.jpg" },
  { name: "سینا علیزاد", img: "/meme.jpg" },
  { name: "پویا جنگ آرا", img: "/meme.jpg" },
  { name: "الیار رنجبر", img: "/meme.jpg" },
];
</script>

<template>
  <div>
    <h1 class="mr-[6%] mb-8 text-[40px] text-gray-200 font-bold">اسامی اعضا</h1>
  </div>

  <div class="w-[90%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
    <div
      v-for="(member, index) in members"
      :key="index"
      class="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-xl bg-gray-900/80 border border-sky-500/20 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <!-- profile image -->
      <img
        :src="member.img"
        alt="profile"
        class="w-14 h-14 rounded-full object-cover border-2 border-sky-400 shadow-md"
      />

      <!-- member name -->
      <span class="text-gray-200 font-semibold text-lg tracking-wide">
        {{ member.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Optional: add smooth hover transition */
div[class*="hover:"] {
  transition: all 0.25s ease-in-out;
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position:  left; /* stick it to top-left corner */
  background-size: 20%;
}
</style>
