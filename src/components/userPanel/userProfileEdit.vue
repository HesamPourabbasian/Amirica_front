```vue
<template>
  <div class="h-[80px] bg-gradient-to-b from-pink-900 via-pink-900 to-pink-900"></div>

  <div class="grid grid-cols-1 md:grid-cols-[20%_80%] h-screen">
    <!-- Sidebar -->
    <div class="bg-gray-900  md:block">
      <user-side-bar />
    </div>

    <!-- Main container -->
    <div
        class="p-4 md:p-6 overflow-y-auto bg-gradient-to-b from-pink-900 via-purple-900 to-purple-950  shadow-xl font-sans text-right h-[150vh]"
    >
      <h1
          class="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10 text-white text-center drop-shadow-lg"
      >
        ویرایش پروفایل کاربر
      </h1>

      <!-- Steps -->
      <div class="flex justify-center">
        <ul class="steps steps-vertical md:steps-horizontal w-full md:w-2xl mb-8 md:mb-10">
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
      </div>


      <form @submit.prevent="saveProfile" class="relative">
        <transition name="fade" mode="out-in">
          <div :key="currentStep" class="space-y-6">
            <!-- Step 1 -->
            <div v-if="currentStep === 1" class="space-y-6">
              <div>
                <label class="block text-white font-semibold mb-2" for="name"
                >نام</label
                >
                <input
                    id="name"
                    v-model="profile.name"
                    type="text"
                    class="input-field"
                    :class="{ 'border-red-500': errors.name }"
                    aria-describedby="name-error"
                />
                <p v-if="errors.name" id="name-error" class="error-text">
                  {{ errors.name }}
                </p>
              </div>
              <div>
                <label
                    class="block text-white font-semibold mb-2"
                    for="lastName"
                >نام خانوادگی</label
                >
                <input
                    id="lastName"
                    v-model="profile.lastName"
                    type="text"
                    class="input-field"
                    :class="{ 'border-red-500': errors.lastName }"
                    aria-describedby="lastName-error"
                />
                <p
                    v-if="errors.lastName"
                    id="lastName-error"
                    class="error-text"
                >
                  {{ errors.lastName }}
                </p>
              </div>
              <div>
                <label
                    class="block text-white font-semibold mb-2"
                    for="nickname"
                >لقب</label
                >
                <input
                    id="nickname"
                    v-model="profile.nickname"
                    type="text"
                    class="input-field"
                    :class="{ 'border-red-500': errors.nickname }"
                    aria-describedby="nickname-error"
                />
                <p
                    v-if="errors.nickname"
                    id="nickname-error"
                    class="error-text"
                >
                  {{ errors.nickname }}
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div v-if="currentStep === 2" class="space-y-6">
              <div>
                <label
                    class="block text-white font-semibold mb-2"
                    for="birthDate"
                >تاریخ تولد</label
                >
                <input
                    id="birthDate"
                    v-model="profile.birthDate"
                    type="date"
                    class="input-field"
                    :class="{ 'border-red-500': errors.birthDate }"
                    aria-describedby="birthDate-error"
                />
                <p
                    v-if="errors.birthDate"
                    id="birthDate-error"
                    class="error-text"
                >
                  {{ errors.birthDate }}
                </p>
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="major"
                >رشته تحصیلی</label
                >
                <input
                    id="major"
                    v-model="profile.major"
                    type="text"
                    class="input-field"
                    :class="{ 'border-red-500': errors.major }"
                    aria-describedby="major-error"
                />
                <p v-if="errors.major" id="major-error" class="error-text">
                  {{ errors.major }}
                </p>
              </div>
              <div>
                <label
                    class="block text-white font-semibold mb-2"
                    for="currentJob"
                >شغل کنونی</label
                >
                <input
                    id="currentJob"
                    v-model="profile.currentJob"
                    type="text"
                    class="input-field"
                    :class="{ 'border-red-500': errors.currentJob }"
                    aria-describedby="currentJob-error"
                />
                <p
                    v-if="errors.currentJob"
                    id="currentJob-error"
                    class="error-text"
                >
                  {{ errors.currentJob }}
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div v-if="currentStep === 3" class="space-y-6">
              <div v-for="field in fields" :key="field.key">
                <label
                    class="block text-white font-semibold mb-2"
                    :for="field.key"
                >{{ field.label }}</label
                >
                <component
                    :is="field.type === 'textarea' ? 'textarea' : 'input'"
                    v-model="profile[field.key]"
                    :type="field.type !== 'textarea' ? field.type : undefined"
                    :rows="field.type === 'textarea' ? 4 : undefined"
                    class="input-field"
                    :class="{ 'border-red-500': errors[field.key] }"
                />
                <p
                    v-if="errors[field.key]"
                    :id="`${field.key}-error`"
                    class="error-text"
                >
                  {{ errors[field.key] }}
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div
                v-if="currentStep === 4"
                class="space-y-6 flex flex-col items-center"
            >
              <label
                  class="block text-white font-semibold mb-3"
                  for="profile-pic"
              >عکس پروفایل</label
              >
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
                <span v-else class="text-gray-400 text-center text-sm"
                >فایل را بکشید یا کلیک کنید</span
                >
              </div>
              <p v-if="imageError" id="profile-pic-error" class="error-text">
                {{ imageError }}
              </p>
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
          >
            قبلی
          </button>
          <button
              v-if="currentStep < 4"
              type="button"
              class="btn-blue"
              @click="nextStep"
          >
            بعدی
          </button>
          <button v-else type="submit" class="btn-green">ذخیره تغییرات</button>
        </div>
      </form>


    </div>
  </div>
  <!-- Mobile Dock -->
  <user-mobile-dock/>
  <!-- 📌 DaisyUI Modal -->
  <dialog id="logoutModalMobile" class="modal">
    <div class="modal-box text-right">
      <h3 class="font-bold text-lg">آیا مطمینید میخواهید خارج شوید؟</h3>
      <div class="modal-action">
        <form method="dialog" class="flex gap-2">
          <!-- Cancel -->
          <button class="btn">انصراف</button>
          <!-- Confirm -->
          <router-link to="/" class="btn btn-error">خروج</router-link>
        </form>
      </div>
    </div>
  </dialog>

</template>

<script>
import AdminSidebar from "../AdminSidebar.vue";
import Mobile_dock from "@/components/mobile_dock.vue";

export default {
  components: {Mobile_dock, AdminSidebar },
  data() {
    return {
      currentStep: 1,
      profile: {
        name: "",
        lastName: "",
        nickname: "",
        birthDate: "",
        major: "",
        currentJob: "",
        interests: "",
        skills: "",
        personality: "",
        groupRole: "",
        slogan: "",
      },
      fields: [
        { key: "interests", label: "علایق", type: "textarea" },
        { key: "skills", label: "مهارت‌ها", type: "textarea" },
        { key: "personality", label: "ویژگی‌های شخصیتی", type: "textarea" },
        { key: "groupRole", label: "نقش در گروه", type: "text" },
        { key: "slogan", label: "شعار", type: "text" },
      ],
      errors: {},
      previewImage: null,
      imageError: null,
      maxFileSize: 5 * 1024 * 1024,
    };
  },
  methods: {
    clearErrors() {
      this.errors = {};
      this.imageError = null;
    },
    validateStep(step) {
      this.clearErrors();
      let isValid = true;

      if (step === 1) {
        if (!this.profile.name?.trim()) {
          this.errors.name = "نام الزامی است";
          isValid = false;
        }
        if (!this.profile.lastName?.trim()) {
          this.errors.lastName = "نام خانوادگی الزامی است";
          isValid = false;
        }
        if (!this.profile.nickname?.trim()) {
          this.errors.nickname = "لقب الزامی است";
          isValid = false;
        }
      } else if (step === 2) {
        if (!this.profile.birthDate) {
          this.errors.birthDate = "تاریخ تولد الزامی است";
          isValid = false;
        }
        if (!this.profile.major?.trim()) {
          this.errors.major = "رشته تحصیلی الزامی است";
          isValid = false;
        }
        if (!this.profile.currentJob?.trim()) {
          this.errors.currentJob = "شغل کنونی الزامی است";
          isValid = false;
        }
      }  if (step === 4) {
        if (!this.previewImage) {
          this.imageError = "عکس پروفایل الزامی است";
          isValid = false;
        }
      }

      return isValid;
    },
    nextStep() {
      if (this.validateStep(this.currentStep)) this.currentStep += 1;
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
        this.clearErrors();
      }
    },
    handleFileSelect(event) {
      this.processFile(event.target.files[0]);
    },
    handleDrop(event) {
      this.processFile(event.dataTransfer.files[0]);
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
      let allValid = true;
      for (let step = 1; step <= 4; step++) {
        if (!this.validateStep(step)) {
          allValid = false;
          this.currentStep = step;
          break;
        }
      }
      if (allValid) {
        console.log("Saving profile:", this.profile, this.previewImage);
        alert("پروفایل با موفقیت ذخیره شد!");
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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

/* Dock styling */
.dock {
  height: 70px;
}
.dock-item span {
  font-size: 28px;
}

</style>
```
