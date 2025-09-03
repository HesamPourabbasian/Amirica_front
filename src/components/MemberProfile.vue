<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import membersData from "/Users/hesam/Documents/Projects/Front_End/Vue-Projects/Amirica_front/src/assets/members-data.json";

const route = useRoute();
const member = ref(null);

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

const formatKey = (key) => key.replace(/_/g, " ");

const formatValue = (key, value) => {
  if (Array.isArray(value)) return value.join("، ");
  if (!value) return "ارائه نشده";
  if (typeof value === "number" && (key === "بدهی‌ها" || key === "اعتبارها")) {
    return `${value.toFixed(2)} تومان`;
  }
  return value;
};
</script>

<template>
  <div
    dir="rtl"
    class="min-h-screen mt-[50px] flex flex-col items-center justify-start py-6 px-3 sm:px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
  >
    <div v-if="member" class="profile-card animate-fade-in">
      <!-- Profile Header -->
      <div class="profile-header relative">
        <div class="relative inline-block">
          <img
            :src="member.عکس || '/images/default.jpg'"
            :alt="`${member.نام} ${member.نام_خانوادگی}`"
            class="profile-img shadow-lg"
          />
        </div>
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-6 tracking-tight"
        >
          {{ member.نام }} {{ member.نام_خانوادگی }}
        </h1>
        <p class="text-base sm:text-lg text-blue-300 font-medium mt-2 italic">
          {{ member.نقش_در_گروه }}
        </p>
      </div>

      <!-- Profile Details -->
      <div class="profile-details">
        <h2
          class="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-blue-500/40 pb-3 flex items-center gap-2"
        >
          جزئیات پروفایل
        </h2>

        <dl
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <transition-group name="fade-up" tag="div" class="contents">
            <div
              v-for="key in profileKeys"
              :key="key"
              class="detail-item group"
            >
              <dt
                class="text-gray-400 font-medium text-sm sm:text-base tracking-wide flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                {{ formatKey(key) }}
              </dt>
              <dd
                class="text-white mt-1.5 text-sm sm:text-base font-light group-hover:text-blue-200 transition-colors duration-300"
              >
                {{ formatValue(key, member[key]) }}
              </dd>
            </div>
          </transition-group>
        </dl>
      </div>

      <!-- Back Button -->
      <router-link to="/" class="back-button">
        ← بازگشت به صفحه اصلی
      </router-link>
    </div>

    <!-- Not Found -->
    <div v-else class="not-found animate-fade-in">
      <p class="text-gray-300 text-lg mb-4">عضو یافت نشد.</p>
      <router-link to="/" class="back-button">
        بازگشت به لیست اعضا
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.4s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Profile card container */
.profile-card {
  width: 100%;
  max-width: none; /* Full width */
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(18px);
  border-radius: 1rem;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  padding: 0;
  margin-top: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.45);
}

/* Profile header */
.profile-header {
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease;
}
.profile-img:hover {
  transform: scale(1.05);
}

/* Profile details */
.profile-details {
  padding: 2rem 1rem;
}
.detail-item {
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}
.detail-item:hover {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

/* Back button */
.back-button {
  display: block;
  width: fit-content;
  margin: 1.5rem auto 2rem auto;
  padding: 0.6rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 9999px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}
.back-button:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* Not found state */
.not-found {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 1rem;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.35);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile-header {
    padding: 1.5rem 1rem;
  }
  .profile-img {
    width: 80px;
    height: 80px;
  }
  .profile-details {
    padding: 1.5rem 0.75rem;
  }
}
@media (max-width: 480px) {
  .profile-img {
    width: 70px;
    height: 70px;
  }
  .back-button {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
