<script setup>
import membersData from "/Users/hesam/Documents/Projects/Front_End/Vue-Projects/Amirica_front/src/assets/members-data.json";
import { ref, onMounted } from "vue";
const members = ref([]);
onMounted(() => {
  members.value = membersData.members; // Access the 'members' array from the JSON
});
</script>

<template>
  <div>
    <h1 class="mr-[6%] mb-8 text-[40px] text-gray-200 font-bold">اسامی اعضا</h1>
  </div>

  <ul class="w-[90%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
    <li
      v-for="m in members"
      :key="m.id"
      class="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-xl bg-gray-900/80 border border-sky-500/20 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <router-link :to="`/member/${m.id}`" class="flex items-center gap-4">
        <!-- profile image -->
        <img
          :src="m.photo || '/images/default.jpg'"
          alt="profile"
          class="w-14 h-14 rounded-full object-cover border-2 border-sky-400 shadow-md"
        />
        <!-- member name -->
        <span class="text-gray-200 font-semibold text-lg tracking-wide">
          {{ m.firstName }} {{ m.lastName }}
          <!-- Use firstName and lastName -->
        </span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
/* Optional: add smooth hover transition */
div[class*="hover:"] {
  transition: all 0.25s ease-in-out;
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position: left; /* stick it to top-left corner */
  background-size: 20%;
}
</style>
