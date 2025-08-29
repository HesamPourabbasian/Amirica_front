<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto p-4 sm:p-6 md:p-8">
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <!-- Text Card -->
      <div class="sec1 flex-1 p-2 sm:p-4 md:p-6">
        <div class="p-4 sm:p-6">
          <h1
            class="text-right text-[40px] text-gray-200 font-bold tracking-wide mb-4"
          >
            لورم ایپسوم
          </h1>
          <p class="text-right text-yellow-100 leading-relaxed text-[20px]">
            لورم ایپسوم متن ساختگی است که از صنعت چاپ و صفحه‌آرایی نشأت گرفته و
            امروزه به‌عنوان متن جایگزین در طراحی‌های گرافیکی و وب استفاده
            می‌شود. این متن به طراحان کمک می‌کند تا شکل و ظاهر نهایی طرح را بدون
            توجه به محتوای واقعی مشاهده کنند. لورم ایپسوم معمولاً شامل جملات و
            پاراگراف‌های بدون معنی است و به صورت تصادفی از حروف و کلمات لاتین
            ساخته شده است. استفاده از این متن باعث می‌شود تا تمرکز بر روی طراحی
            و چیدمان باشد و محتوای واقعی، که هنوز آماده نشده، مزاحم تحلیل ظاهر
            نشود. این متن در طول زمان به شکل‌های مختلفی تغییر یافته و نسخه‌های
            متنوعی از آن ایجاد شده است، اما هدف اصلی همیشه یکسان باقی مانده: پر
            کردن فضای خالی در طراحی و ارائه نمونه‌ای واقعی از نحوه‌ی نمایش متن
            در قالب گرافیکی یا دیجیتال. لورم ایپسوم نه تنها در چاپ سنتی، بلکه در
            طراحی وب، اپلیکیشن‌ها و نرم‌افزارهای دیجیتال نیز کاربرد دارد و به
            توسعه‌دهندگان و طراحان امکان می‌دهد تا تجربه‌ی بصری کاربر را پیش از
            آماده شدن محتوای واقعی، شبیه‌سازی کنند.
          </p>

          <a
            href="#"
            class="flex text-blue-400 hover:text-sky-500 mt-4 text-sm font-semibold transition-all"
          >
            <img
              class="w-5 h-5 mr-2"
              src="/link_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt="link icon"
            />
            اطلاعات بیشتر
          </a>
        </div>
      </div>

      <!-- Image Card -->
      <div class="flex-1 flex items-center justify-center mt-4 md:mt-0">
        <div class="p-2 sm:p-4 md:p-6 w-full flex justify-center">
          <img class="w-[80%] mx-auto" src="/one.png" alt="illustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec1 {
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position: top left; /* stick it to top-left corner */
  background-size: 30%;
}
</style>
