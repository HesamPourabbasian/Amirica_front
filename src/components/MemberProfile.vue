<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import membersData from "/Users/hesam/Documents/Projects/Front_End/Vue-Projects/Amirica_front/src/assets/members-data.json";

const route = useRoute();
const member = ref(null);

// Hardcoded list of keys in Persian
const profileKeys = [
  "شناسه",
  "نام",
  "نام_خانوادگی",
  "تاریخ_تولد",
  "رشته_تحصیلی",
  "لقب",
  "شغل_کنونی",
  "علایق",
  "مهارت‌ها",
  "ویژگی‌های_شخصیتی",
  "فحش های داده شده",
  "بدهی‌ها",
  "اعتبارها",
  "نقش_در_گروه",
  "شعار",
  "توصیه_فیلم",
  "توصیه_موسیقی",
  "توصیه_کتاب",
  "توصیه_بازی",
];

member.value = membersData.اعضا.find(
  (m) => m.شناسه === parseInt(route.params.id)
);

// Helper function to format keys for display (adjusted for Persian)
const formatKey = (key) => {
  return key.replace(/_/g, " "); // Replace underscores with spaces for readability
};

// Helper function to format values (e.g., arrays, empty strings)
const formatValue = (key, value) => {
  if (Array.isArray(value)) return value.join("، "); // Use Persian comma
  if (!value) return "ارائه نشده";
  if (typeof value === "number" && (key === "بدهی‌ها" || key === "اعتبارها")) {
    return `${value.toFixed(2)} تومان`; // Use Persian currency
  }
  return value;
};
</script>

<template>
  <div
    dir="rtl"
    class="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-main-color"
  >
    <div v-if="member" class="profile-card">
      <!-- Profile Header -->
      <div class="profile-header">
        <img
          :src="member.عکس || '/images/default.jpg'"
          :alt="`${member.نام} ${member.نام_خانوادگی}`"
          class="profile-img"
        />
        <h1 class="text-4xl font-extrabold text-white">
          {{ member.نام }} {{ member.نام_خانوادگی }}
        </h1>
        <p class="text-lg text-accent font-medium mt-1">
          {{ member.نقش_در_گروه }}
        </p>
      </div>
      <!-- Profile Details -->
      <div class="profile-details">
        <h2
          class="text-2xl font-semibold text-white mb-6 border-b border-accent pb-2 text-right"
        >
          جزئیات پروفایل
        </h2>
        <dl class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="key in profileKeys" :key="key" class="detail-item">
            <dt class="text-gray-300 font-medium">{{ formatKey(key) }}</dt>
            <dd class="text-gray-100 mt-1">
              {{ formatValue(key, member[key]) }}
            </dd>
          </div>
        </dl>
      </div>
      <!-- Back Button -->
      <router-link to="/" class="back-button">
        بازگشت به لیست اعضا
      </router-link>
    </div>
    <div v-else class="not-found">
      <p class="text-gray-300 text-lg mb-4">عضو یافت نشد.</p>
      <router-link to="/" class="back-button">
        بازگشت به لیست اعضا
      </router-link>
    </div>
  </div>
</template>

<style scoped>
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

/* Profile card container */
.profile-card {
  width: 100%;
  background: var(--card-bg);
  backdrop-filter: blur(15px);
  border-radius: 1.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;
  max-width: 100%;
  margin-top: 60px;
}

/* Profile header */
.profile-header {
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #4b6cb7 0%, #1e263c 100%);
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Profile details */
.profile-details {
  padding: 2rem 1rem;
}

.detail-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0.75rem;
  transition: background 0.2s ease, transform 0.2s ease;
}

.detail-item:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.detail-item dt {
  font-size: 0.9rem;
  color: gray;
  text-align: right;
}

.detail-item dd {
  font-size: 1rem;
  color: whitesmoke;
  margin-top: 0.25rem;
  word-break: break-word;
  text-align: right;
}

/* Back button */
.back-button {
  display: block;
  width: fit-content;
  margin: 2rem auto 1rem;
  padding: 0.8rem 2rem;
  background: var(--accent);
  color: white;
  border-radius: 0.75rem;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.back-button:hover {
  background: #3b5ca0;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

/* Not found state */
.not-found {
  text-align: center;
  padding: 3rem 1rem;
  background: var(--card-bg);
  border-radius: 1.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .detail-item {
    padding: 0.9rem;
  }
}

@media (max-width: 768px) {
  .profile-header {
    padding: 1.5rem 0.75rem;
  }
  .profile-img {
    width: 100px;
    height: 100px;
  }
  .profile-details {
    padding: 1.5rem 0.75rem;
  }
  dl {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 480px) {
  .profile-img {
    width: 90px;
    height: 90px;
  }
  .profile-details {
    padding: 1rem 0.5rem;
  }
  .back-button {
    padding: 0.7rem 1.5rem;
  }
}
</style>
