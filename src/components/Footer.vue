<script setup>
const developers = [
  {
    name: "حسام پورعباسیان",
    telegram: "https://t.me/yourTelegramUsername", // 🔹 Replace with actual usernames
    github: "https://github.com/HesamPourabbasian",
  },
  {
    name: "مهدی دولتی",
    telegram: "https://t.me/mahdiUsername",
    github: "https://github.com/mahdiUsername",
  },
  {
    name: "پویا زادمهر",
    telegram: "https://t.me/pouyaUsername",
    github: "https://github.com/pouyaUsername",
  },
];
</script>

<template>
  <footer class="bg-gray-900 text-gray-200 py-9 mt-10">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <h2 class="text-2xl font-bold text-center mb-8">
        با برنامه نویسان پروژه آشنا شوید
      </h2>

      <!-- Developers -->
      <div class="grid gap-8 md:grid-cols-3 text-center">
        <div
          v-for="dev in developers"
          :key="dev.name"
          class="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <h3 class="text-lg font-semibold mb-4">{{ dev.name }}</h3>
          <div class="flex gap-6">
            <!-- Telegram -->
            <a
              :href="dev.telegram"
              target="_blank"
              class="hover:scale-110 transition"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-7 h-7 text-blue-400"
              >
                <path
                  d="M9.993 15.671 9.86 19.1c.329 0 .471-.141.642-.311l1.541-1.468 3.199 2.335c.585.322 1.001.153 1.147-.542l2.078-9.77c.213-.97-.35-1.352-.905-1.115L5.5 12.08c-.938.379-.924.916-.16 1.161l3.086.962 7.168-4.517c.338-.229.646-.103.392.126l-6.993 5.859Z"
                />
              </svg>
            </a>

            <!-- GitHub -->
            <a
              :href="dev.github"
              target="_blank"
              class="hover:scale-110 transition"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-7 h-7 text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 .297a12 12 0 0 0-3.792 23.402c.6.113.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.808 1.304 3.493.997.107-.775.418-1.305.76-1.606-2.665-.305-5.466-1.334-5.466-5.933 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.527.117-3.184 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.657.241 2.879.118 3.184.768.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.627-5.475 5.927.43.372.814 1.102.814 2.222v3.293c0 .319.22.694.825.576A12.001 12.001 0 0 0 12 .297Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
        <div class="text-center text-sm text-gray-500 mt-8">
            &copy; 2025 همه حقوق محفوظ است.
        </div>
    </div>
  </footer>
</template>

<style scoped>
footer{
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position:right; /* stick it to top-left corner */
  background-size: 30%;

}</style>
