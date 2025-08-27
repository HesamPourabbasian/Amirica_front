<script setup>
const members = [
  { name: "حسام پورعباسیان", img: "/profile1.jpg" },
  { name: "مهدی دولتی", img: "/profile2.jpg" },
  { name: "پویا زادمهر", img: "/profile3.jpg" },
  { name: "محمد جمالی", img: "/profile4.jpg" },
  { name: "محمد حسن زاده", img: "/profile5.jpg" },
  { name: "امین فلاح", img: "/profile6.jpg" },
  { name: "سینا علیزاد", img: "/profile7.jpg" },
  { name: "پویا جنگ آرا", img: "/profile8.jpg" },
  { name: "الیار رنجبر", img: "/profile9.jpg" },
];
</script>

<template>
  <div class="w-[90%] mx-auto grid gap-4">
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
