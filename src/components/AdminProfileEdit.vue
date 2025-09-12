<template>
  <div class="h-[80px] bg-[#121929]"></div>

  <div class="grid grid-cols-1 md:grid-cols-[20%_80%] h-screen">
    <!-- Sidebar -->
    <div class="bg-gray-900 hidden md:block">
      <AdminSidebar />
    </div>

    <!-- Main container -->
    <div
      class="p-4 md:p-6 overflow-y-auto bg-gradient-to-br from-[#121929] via-[#1b2436] to-[#121929] pt-[50px] shadow-xl font-sans text-right"
    >
      <h1
        class="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10 text-white text-center drop-shadow-lg"
      >
        ویرایش پروفایل ادمین
      </h1>

      <!-- DaisyUI Steps -->
      <ul class="steps steps-vertical md:steps-horizontal mb-8 md:mb-10">
        <li :class="currentStep >= 1 ? 'step step-primary' : 'step'">
          اطلاعات پایه
        </li>
        <li :class="currentStep >= 2 ? 'step step-primary' : 'step'">
          اطلاعات فردی
        </li>
        <li :class="currentStep >= 3 ? 'step step-primary' : 'step'">
          جزئیات بیشتر
        </li>
        <li :class="currentStep >= 4 ? 'step step-primary' : 'step'">
          عکس پروفایل
        </li>
      </ul>

      <form @submit.prevent="saveProfile" class="relative">
        <!-- Parent transition for steps -->
        <transition name="fade" mode="out-in">
          <div :key="currentStep" class="space-y-6">
            <!-- Step 1 -->
            <div v-if="currentStep === 1" class="space-y-6">
              <div>
                <label class="block text-white font-semibold mb-2" for="name">نام</label>
                <input
                  id="name"
                  v-model="profile.نام"
                  type="text"
                  class="input-field"
                  :class="{ 'border-red-500': errors.نام }"
                  aria-describedby="name-error"
                />
                <p v-if="errors.نام" id="name-error" class="error-text">{{ errors.نام }}</p>
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="last-name">نام خانوادگی</label>
                <input
                  id="last-name"
                  v-model="profile.نام_خانوادگی"
                  type="text"
                  class="input-field"
                  :class="{ 'border-red-500': errors.نام_خانوادگی }"
                  aria-describedby="last-name-error"
                />
                <p v-if="errors.نام_خانوادگی" id="last-name-error" class="error-text">
                  {{ errors.نام_خانوادگی }}
                </p>
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="nickname">لقب</label>
                <input
                  id="nickname"
                  v-model="profile.لقب"
                  type="text"
                  class="input-field"
                  :class="{ 'border-red-500': errors.لقب }"
                  aria-describedby="nickname-error"
                />
                <p v-if="errors.لقب" id="nickname-error" class="error-text">{{ errors.لقب }}</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-if="currentStep === 2" class="space-y-6">
              <div>
                <label class="block text-white font-semibold mb-2" for="birth-date">تاریخ تولد</label>
                <input
                  id="birth-date"
                  v-model="profile.تاریخ_تولد"
                  type="date"
                  class="input-field"
                  :class="{ 'border-red-500': errors.تاریخ_تولد }"
                  aria-describedby="birth-date-error"
                />
                <p v-if="errors.تاریخ_تولد" id="birth-date-error" class="error-text">
                  {{ errors.تاریخ_تولد }}
                </p>
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="major">رشته تحصیلی</label>
                <input
                  id="major"
                  v-model="profile.رشته_تحصیلی"
                  type="text"
                  class="input-field"
                  :class="{ 'border-red-500': errors.رشته_تحصیلی }"
                  aria-describedby="major-error"
                />
                <p v-if="errors.رشته_تحصیلی" id="major-error" class="error-text">
                  {{ errors.رشته_تحصیلی }}
                </p>
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="job">شغل کنونی</label>
                <input
                  id="job"
                  v-model="profile.شغل_کنونی"
                  type="text"
                  class="input-field"
                  :class="{ 'border-red-500': errors.شغل_کنونی }"
                  aria-describedby="job-error"
                />
                <p v-if="errors.شغل_کنونی" id="job-error" class="error-text">{{ errors.شغل_کنونی }}</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div v-if="currentStep === 3" class="space-y-6">
              <div v-for="field in fields" :key="field.key">
                <label class="block text-white font-semibold mb-2" :for="field.key">{{ field.label }}</label>
                <component
                  :is="field.type === 'textarea' ? 'textarea' : 'input'"
                  :id="field.key"
                  v-model="profile[field.key]"
                  :type="field.type !== 'textarea' ? field.type : undefined"
                  :rows="field.type === 'textarea' ? 4 : undefined"
                  class="input-field"
                  :class="{ 'border-red-500': errors[field.key] }"
                  :aria-describedby="`${field.key}-error`"
                />
                <p v-if="errors[field.key]" :id="`${field.key}-error`" class="error-text">
                  {{ errors[field.key] }}
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div v-if="currentStep === 4" class="space-y-6 flex flex-col items-center">
              <label class="block text-white font-semibold mb-3" for="profile-pic">عکس پروفایل</label>
              <div
                class="relative border-2 border-dashed rounded-2xl p-6 w-52 h-52 flex items-center justify-center cursor-pointer border-amber-200 hover:border-blue-500 transition-all duration-300 bg-[#202a3b]/60"
                @dragover.prevent
                @drop.prevent="handleDrop"
                @click="$refs.fileInput.click()"
              >
                <input
                  id="profile-pic"
                  type="file"
                  ref="fileInput"
                  accept="image/jpeg,image/png"
                  class="hidden"
                  @change="handleFileSelect"
                  aria-describedby="profile-pic-error"
                />
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  alt="پروفایل"
                  class="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <span v-else class="text-gray-400 text-center text-sm">فایل را بکشید یا کلیک کنید</span>
              </div>
              <p v-if="imageError" id="profile-pic-error" class="error-text">{{ imageError }}</p>
            </div>
          </div>
        </transition>

        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-8">
          <button
            type="button"
            class="btn-gray"
            @click="prevStep"
            :disabled="currentStep === 1"
            aria-label="مرحله قبلی"
          >
            قبلی
          </button>
          <button
            v-if="currentStep < 4"
            type="button"
            class="btn-blue"
            @click="nextStep"
            aria-label="مرحله بعدی"
          >
            بعدی
          </button>
          <button v-else type="submit" class="btn-green" aria-label="ذخیره تغییرات">
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "./AdminSidebar.vue";

export default {
  components: { AdminSidebar },
  data() {
    return {
      currentStep: 1,
      profile: {
        نام: "",
        نام_خانوادگی: "",
        لقب: "",
        تاریخ_تولد: "",
        رشته_تحصیلی: "",
        شغل_کنونی: "",
        علایق: "",
        "مهارت‌ها": "",
        "ویژگی‌های_شخصیتی": "",
        "نقش_در_گروه": "",
        شعار: "",
      },
      fields: [
        { key: "علایق", label: "علایق", type: "textarea" },
        { key: "مهارت‌ها", label: "مهارت‌ها", type: "textarea" },
        { key: "ویژگی‌های_شخصیتی", label: "ویژگی‌های شخصیتی", type: "textarea" },
        { key: "نقش_در_گروه", label: "نقش در گروه", type: "text" },
        { key: "شعار", label: "شعار", type: "text" },
      ],
      errors: {},
      previewImage: null,
      imageError: null,
      maxFileSize: 5 * 1024 * 1024,
    };
  },
  methods: {
    validateStep(step) {
      this.errors = {};
      this.imageError = null;
      let isValid = true;

      if (step === 1) {
        if (!this.profile.نام) {
          this.errors.نام = "نام الزامی است";
          isValid = false;
        }
        if (!this.profile.نام_خانوادگی) {
          this.errors.نام_خانوادگی = "نام خانوادگی الزامی است";
          isValid = false;
        }
        if (!this.profile.لقب) {
          this.errors.لقب = "لقب الزامی است";
          isValid = false;
        }
      } else if (step === 2) {
        if (!this.profile.تاریخ_تولد) {
          this.errors.تاریخ_تولد = "تاریخ تولد الزامی است";
          isValid = false;
        }
        if (!this.profile.رشته_تحصیلی) {
          this.errors.رشته_تحصیلی = "رشته تحصیلی الزامی است";
          isValid = false;
        }
        if (!this.profile.شغل_کنونی) {
          this.errors.شغل_کنونی = "شغل کنونی الزامی است";
          isValid = false;
        }
      } else if (step === 3) {
        this.fields.forEach((field) => {
          if (!this.profile[field.key]) {
            this.errors[field.key] = `${field.label} الزامی است`;
            isValid = false;
          }
        });
      } else if (step === 4) {
        if (!this.previewImage) {
          this.imageError = "عکس پروفایل الزامی است";
          isValid = false;
        }
      }

      return isValid;
    },
    nextStep() {
      if (this.validateStep(this.currentStep)) {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
        this.errors = {};
        this.imageError = null;
      }
    },
    handleFileSelect(event) {
      const file = event.target.files[0];
      this.processFile(file);
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      this.processFile(file);
    },
    processFile(file) {
      this.imageError = null;
      this.previewImage = null;
      if (!file) {
        this.imageError = "هیچ فایلی انتخاب نشده است";
        return;
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        this.imageError = "فقط فایل‌های JPEG یا PNG مجاز هستند";
        return;
      }
      if (file.size > this.maxFileSize) {
        this.imageError = "حجم فایل باید کمتر از ۵ مگابایت باشد";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    },
    async saveProfile() {
      this.errors = {};
      this.imageError = null;

      let allValid = true;
      for (let step = 1; step <= 4; step++) {
        if (!this.validateStep(step)) {
          allValid = false;
          this.currentStep = step;
          break;
        }
      }

      if (allValid) {
        try {
          console.log("Saving profile:", this.profile, this.previewImage);
          alert("پروفایل با موفقیت ذخیره شد!");
        } catch (error) {
          console.error("Error saving profile:", error);
          alert("خطا در ذخیره پروفایل");
        }
      }
    },
  },
};
</script>

<style scoped>
@reference "tailwindcss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Tailwind @apply helpers */
.input-field {
  @apply w-full border border-gray-600 bg-gray-700/60 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 transition;
}
.error-text {
  @apply text-red-400 text-sm mt-1;
}
.btn-gray {
  @apply px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white transition disabled:opacity-50;
}
.btn-blue {
  @apply px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition;
}
.btn-green {
  @apply px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition;
}
</style>
