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
  background-repeat: no-repeat; /* prevent tiling */
  background-position: top right; /* stick it to top-right corner (RTL) */
  background-size: 40%; /* Default size */
}

/* Container adjustments for responsiveness */
.container {
  max-width: 100%; /* Prevent overflow on small screens */
  padding: clamp(1rem, 4vw, 2rem); /* Responsive padding */
  margin-top: clamp(2rem, 5vw, 3rem); /* Responsive margin-top */
}

/* Flex container adjustments */
.container > div {
  gap: clamp(1rem, 3vw, 1.5rem); /* Responsive gap between flex items */
}

/* Image adjustments */
.sec3 img {
  width: clamp(150px, 40vw, 250px); /* Responsive image width */
  max-width: 100%; /* Prevent overflow */
  height: auto; /* Maintain aspect ratio */
}

/* Typography adjustments */
h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* Responsive font size */
  line-height: 1.2; /* Improve readability */
}

p {
  font-size: clamp(1rem, 3vw, 1.25rem); /* Responsive font size */
  padding-top: clamp(0.5rem, 2vw, 1rem); /* Responsive padding-top */
  line-height: 1.5; /* Improve readability */
}

p a {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem); /* Responsive link font size */
}

/* Background image adjustments for smaller screens */
@media (max-width: 640px) {
  .sec3 {
    background-size: 60%; /* Larger background image on small screens */
    background-position: top center; /* Center for better visibility */
  }

  .sec3,
  .flex-1 {
    padding: clamp(0.75rem, 2vw, 1rem); /* Smaller padding on mobile */
  }
.sec3 img {
    width: clamp(150px, 60vw, 200px); /* Slightly larger image on small screens */
  }
  /* Stack image above text for very small screens */
  .sec3 {
    display: flex;
    justify-content: center;
  }
}

/* Adjustments for larger screens */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px; /* Cap container width for large screens */
  }

  .sec3 {
    background-size: 30%; /* Slightly smaller background image on large screens */
  }

  .sec3 img {
    width: clamp(250px, 25vw, 350px); /* Larger image on big screens */
  }
}

/* Ensure RTL text alignment */
h1,
p,
p a {
  text-align: right;
}
</style>
