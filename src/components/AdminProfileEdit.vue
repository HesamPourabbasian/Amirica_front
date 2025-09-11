<template>
  <div class="flex">
    <AdminSidebar />
    <div class="p-6 bg-[#121929]  w-[85%] pt-[100px] shadow-xl font-sans" dir="rtl" >
    <h1 class="text-4xl font-extrabold mb-10 text-white text-center">ویرایش پروفایل ادمین</h1>
    <form @submit.prevent="saveProfile" class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#121929] p-8 rounded-2xl shadow-lg">
      <!-- عکس پروفایل -->
      <div class="md:col-span-2 flex flex-col items-center">
        <label class="block text-white font-semibold mb-3">عکس پروفایل</label>
        <div class="relative border-2 border-dashed rounded-2xl p-6 w-52 h-52 flex items-center justify-center cursor-pointer border-amber-200 hover:border-blue-600 transition duration-300"
             @dragover.prevent
             @drop.prevent="handleDrop"
             @click="fileInput.click()">
          <input type="file" ref="fileInput" accept="image/jpeg,image/png" class="hidden" @change="handleFileSelect" />
          <img v-if="previewImage" :src="previewImage" alt="پروفایل" class="w-full h-full object-cover  rounded-2xl shadow-md" />
          <span v-else class="text-gray-500 text-center text-sm">فایل را بکشید یا کلیک کنید</span>
        </div>
        <p v-if="imageError" class="text-red-500 text-sm mt-2">{{ imageError }}</p>
        <p class="text-sm text-gray-500 mt-2">فرمت‌های مجاز: JPG, PNG (حداکثر 2MB)</p>
      </div>

      <!-- شناسه -->
      <div>
        <label class="block text-white font-semibold mb-2">شناسه</label>
        <input v-model="profile.شناسه" type="number" class="w-full border rounded-lg p-3 bg-red-300 cursor-not-allowed" disabled />
      </div>

      <!-- نام -->
      <!-- نام -->
      <div>
        <label class="block text-white font-semibold mb-2">نام</label>
        <input v-model="profile.نام" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" :class="{ 'border-red-500': errors.نام }" />
        <p v-if="errors.نام" class="text-red-500 text-sm mt-1">{{ errors.نام }}</p>
      </div>

      <!-- نام خانوادگی -->
      <div>
        <label class="block text-white font-semibold mb-2">نام خانوادگی</label>
        <input v-model="profile.نام_خانوادگی" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" :class="{ 'border-red-500': errors.نام_خانوادگی }" />
        <p v-if="errors.نام_خانوادگی" class="text-red-500 text-sm mt-1">{{ errors.نام_خانوادگی }}</p>
      </div>

      <!-- تاریخ تولد -->
      <div>
        <label class="block text-white font-semibold mb-2">تاریخ تولد</label>
        <input v-model="profile.تاریخ_تولد" type="date" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <!-- رشته تحصیلی -->
      <div>
        <label class="block text-white font-semibold mb-2">رشته تحصیلی</label>
        <input v-model="profile.رشته_تحصیلی" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <!-- لقب -->
      <div>
        <label class="block text-white font-semibold mb-2">لقب</label>
        <input v-model="profile.لقب" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <!-- شغل کنونی -->
      <div>
        <label class="block text-white font-semibold mb-2">شغل کنونی</label>
        <input v-model="profile.شغل_کنونی" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <!-- علایق -->
      <div class="md:col-span-2">
        <label class="block text-white font-semibold mb-2">علایق</label>
        <textarea v-model="profile.علایق" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" rows="4"></textarea>
      </div>

      <!-- مهارت‌ها -->
      <div class="md:col-span-2">
        <label class="block text-white font-semibold mb-2">مهارت‌ها</label>
        <textarea v-model="profile.مهارت‌ها" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" rows="4"></textarea>
      </div>

      <!-- ویژگی‌های شخصیتی -->
      <div class="md:col-span-2">
        <label class="block text-white font-semibold mb-2">ویژگی‌های شخصیتی</label>
        <textarea v-model="profile.ویژگی‌های_شخصیتی" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" rows="4"></textarea>
      </div>







      <!-- نقش در گروه -->
      <div>
        <label class="block text-white font-semibold mb-2">نقش در گروه</label>
        <input v-model="profile.نقش_در_گروه" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <!-- شعار -->
      <div class="md:col-span-2">
        <label class="block text-white font-semibold mb-2">شعار</label>
        <input v-model="profile.شعار" type="text" class="w-full border bg-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition" />
      </div>


      <!-- دکمه ذخیره -->
      <div class="md:col-span-2 flex justify-center mt-6">
        <button
            type="submit"
            class="bg-gradient-to-r from-blue-600 to-blue-500
         hover:from-blue-700 hover:to-blue-600
         text-white font-semibold
         px-8 py-3 rounded-xl shadow-lg
         transition duration-300 ease-in-out
         flex items-center gap-2 transform hover:scale-105 hover:shadow-2xl">
          <svg class="w-5 h-5" fill="none" stroke="currentColor"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4">
            </path>
          </svg>
          ذخیره تغییرات
        </button>

      </div>
    </form>
  </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import AdminSidebar from "@/components/AdminSidebar.vue";

const fileInput = ref(null);
const previewImage = ref(null);
const imageError = ref("");
const errors = reactive({
  نام: "",
  نام_خانوادگی: "",
});

const profile = reactive({
  شناسه: 1,
  نام: "",
  نام_خانوادگی: "",
  عکس: "",
  تاریخ_تولد: "",
  رشته_تحصیلی: "",
  لقب: "",
  شغل_کنونی: "",
  علایق: "",
  مهارت‌ها: "",
  ویژگی‌های_شخصیتی: "",
  بدهی‌ها: "",
  نقش_در_گروه: "",
  شعار: "",
});

const validateForm = () => {
  let isValid = true;
  errors.نام = "";
  errors.نام_خانوادگی = "";

  if (!profile.نام.trim()) {
    errors.نام = "نام اجباری است";
    isValid = false;
  }
  if (!profile.نام_خانوادگی.trim()) {
    errors.نام_خانوادگی = "نام خانوادگی اجباری است";
    isValid = false;
  }
  return isValid;
};

const validateImage = (file) => {
  const maxSize = 2 * 1024 * 1024; // 2MB
  const allowedTypes = ["image/jpeg", "image/png"];

  if (!allowedTypes.includes(file.type)) {
    imageError.value = "فقط فرمت‌های JPG و PNG مجاز هستند";
    return false;
  }
  if (file.size > maxSize) {
    imageError.value = "حجم فایل باید کمتر از 2 مگابایت باشد";
    return false;
  }
  return true;
};

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file && validateImage(file)) {
    imageError.value = "";
    previewImage.value = URL.createObjectURL(file);
    profile.عکس = previewImage.value;
  }
};

const handleDrop = (e) => {
  const file = e.dataTransfer.files[0];
  if (file && validateImage(file)) {
    imageError.value = "";
    previewImage.value = URL.createObjectURL(file);
    profile.عکس = previewImage.value;
  }
};

const saveProfile = () => {
  if (!validateForm()) {
    return;
  }
  console.log("Profile Saved:", profile);
  alert("پروفایل با موفقیت ذخیره شد ✅");
};
</script>

<style scoped>
/* پشتیبانی از فونت فارسی */
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');
body, input, textarea, button {
  font-family: 'Vazirmatn', sans-serif;
}
</style>