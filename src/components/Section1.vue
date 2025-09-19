<script setup lang="ts"></script>

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
          <p class="text-right text-yellow-100  text-[20px] leading-[35px]">
            لورم ایپسوم متن ساختگی است که از صنعت چاپ و صفحه‌آرایی نشأت گرفته و
            امروزه به‌عنوان متن جایگزین در طراحی‌های گرافیکی و وب استفاده
            می‌شود. این متن به طراحان کمک می‌کند تا شکل و ظاهر نهایی طرح را بدون
            توجه به محتوای واقعی مشاهده کنند. لورم ایپسوم معمولاً شامل جملات و
            پاراگراف‌های بدون معنی است و به صورت تصادفی از حروف و کلمات لاتین
            ساخته شده است. استفاده از این متن باعث می‌شود تا تمرکز بر روی طراحی
            و چیدمان باشد و محتوای واقعی،  آماده شدن محتوای واقعی، شبیه‌سازی کنند.

          </p>
        </div>
      </div>
      <!-- Image Card -->
      <div class="flex-1 flex items-center justify-center mt-4 md:mt-0">
        <div class="p-2 flex justify-center">
          <img class="" src="/one.png" alt="illustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec1 {
  background-image: url("/web.png");
  background-repeat: no-repeat; /* prevent tiling */
  background-position: top left; /* stick it to top-left corner (RTL) */
  background-size: 30%; /* Default size */
}

/* Position the 'اطلاعات بیشتر' link inline with the paragraph */
.sec1 a {
  display: inline-flex; /* Keep flex for icon and text alignment */
  margin-top: 0; /* Remove mt-4 to eliminate vertical gap */
  vertical-align: bottom; /* Align with the bottom of the last text line */
}

/* Container adjustments for responsiveness */
.container {
  max-width: 100%; /* Prevent overflow on small screens */
  padding: clamp(1rem, 4vw, 2rem); /* Responsive padding */
  margin-top: clamp(2rem, 5vw, 3rem); /* Responsive margin-top for mt-[50px] */
}

/* Flex container adjustments */
.container > div {
  gap: clamp(1rem, 3vw, 1.5rem); /* Responsive gap between flex items */
}

/* Image adjustments */
img {
  width: clamp(100%, 100vw, 100%); /* Full width for smaller screens */
  max-width: 100%; /* Prevent overflow */
  height: auto; /* Maintain aspect ratio */
}

/* Reduce padding in Image Card container to allow larger image */
.flex-1:last-child > div {
  padding: clamp(0.5rem, 1vw, 1rem); /* Reduced padding for more image space */
}

/* Typography adjustments */
h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* Responsive font size (24px–40px) */
  line-height: 1.2; /* Improve readability */
  margin-bottom: clamp(0.5rem, 2vw, 1rem); /* Responsive margin-bottom */
}

p {
  font-size: clamp(1rem, 3vw, 1.25rem); /* Responsive font size (16px–20px) */
}

p a {
  font-size: clamp(
    0.875rem,
    2.5vw,
    1.125rem
  ); /* Responsive link font size (14px–18px), overrides text-sm */
}

/* Responsive padding for flex items */
.sec1,
.flex-1 {
  padding: clamp(0.75rem, 2vw, 1.5rem); /* Responsive padding */
}

.sec1 > div {
  padding: clamp(1rem, 3vw, 1.5rem); /* Responsive inner padding */
}

/* Background image and layout adjustments for smaller screens */
@media (max-width: 640px) {
  .sec1 {
    background-size: 50%; /* Larger background image for visibility */
    background-position: top center; /* Center to avoid overlap in RTL */
  }

  /* Stack image above text and center it */
  .flex-1:last-child {
    margin-top: clamp(0.5rem, 2vw, 1rem); /* Responsive margin-top */
  }
}

/* Adjustments for larger screens */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px; /* Cap container width for large screens */
  }

  .sec1 {
    background-size: 25%; /* Smaller background image for balance */
  }

  img {
    width: 100%; /* Larger image on large screens */
  }
}

/* Ensure RTL text alignment */
h1,
p,
p a {
  text-align: right;
}
</style>
