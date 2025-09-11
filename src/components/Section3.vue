<script setup></script>

<template>
  <div class="container mx-auto p-4 mt-[50px]">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- First div -->
      <div class="sec3 flex-1 p-6 flex justify-center items-center">
        <img
          class=" sm:w-[250px] md:w-[300px] lg:w-[500px]"
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
            class="text-right pt-[20px] text-[20px] text-yellow-100 leading-[35px]"
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
            <a
              href="#"
              class="flex items-center text-right text-[20px] text-blue-500 hover:text-blue-700 transition"
            >
              اطلاعات بیشتر
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec3 {
  background-image: url("/web.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 40%;
}

/* Container adjustments */
.container {
  max-width: 100%;
  padding: clamp(1rem, 4vw, 2rem);
  margin-top: clamp(2rem, 5vw, 3rem);
}

/* Image adjustments */
.sec3 img {
  max-width: 100%;
  height: auto;
}

/* Typography */
h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.2;
}

p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  padding-top: clamp(0.5rem, 2vw, 1rem);
}

p a {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .sec3 {
    background-size: 60%;
    background-position: top center;
  }

  .sec3,
  .flex-1 {
    padding: clamp(0.75rem, 2vw, 1rem);
  }

  .sec3 img {
    width: 90%;
  }

  /* Stack image above text on mobile */
  .flex.flex-col.md\\:flex-row {
    flex-direction: column;
  }
}

/* Large screen adjustments */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }

  .sec3 {
    background-size: 30%;
  }

  .sec3 img {
    width: clamp(250px, 25vw, 350px);
  }
}

/* RTL text */
h1,
p,
p a {
  text-align: right;
}
</style>
