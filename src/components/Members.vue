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
    <h1 class="mr-[6%] mb-5 text-[40px]">اسامی اعضا</h1>
  </div>

  <div class="w-[90%] mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
    <div
      v-for="(member, index) in members"
      :key="index"
      :class="[
        'flex items-center gap-4 px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl',
        index % 2 === 0 ? 'bg-sky-200' : 'bg-gray-200',
      ]"
    >
      <!-- profile image -->
      <img
        :src="member.img"
        alt="profile"
        class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
      />

      <!-- member name -->
      <span class="text-gray-800 font-semibold text-lg">{{ member.name }}</span>
    </div>
  </div>
</template>
