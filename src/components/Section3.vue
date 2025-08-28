<script setup></script>

<template>
  <div class="container mx-auto p-4 mt-[50px]">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- First div -->
      <div class="sec3 flex-1 p-6 flex justify-center items-center">
        <img
          class="w-[200px] md:w-[300px]"
          src="/ryan.png"
          alt="ryan illustration"
        />
      </div>

      <!-- Second div -->
      <div class="flex-1 p-6">
        <div>
          <h1 class="text-right text-[40px] font-bold text-gray-200">
            لورم ایپسوم
          </h1>
          <p
            class="text-right pt-[20px] text-[20px] text-yellow-100 leading-relaxed"
          >
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
        </div>
        <a
          href="#"
          class="flex items-center gap-2 text-right text-[15px] pt-[10px] text-blue-500 hover:text-blue-700 transition"
        >
          <img
            class="w-5 h-5"
            src="/link_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="link icon"
          />
          اطلاعات بیشتر
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec3 {
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position: top right; /* stick it to top-left corner */
  background-size: 40%;
}
</style>
