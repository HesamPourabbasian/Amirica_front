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
            رشد و تحول شخصی
          </h1>
          <p class="text-right text-gray-300 leading-relaxed text-[20px]">
            در دنیای پرشتاب و پرچالش امروز، هر جوان ایرانی بیش از هر زمان دیگری
            نیاز دارد تا مهارت‌ها، استعدادها و توانمندی‌های درونی خود را شناسایی
            و شکوفا کند. رشد فردی و سلف‌امپرومنت نه‌تنها یک انتخاب بلکه ضرورتی
            برای داشتن آینده‌ای روشن، شغل موفق و روابط انسانی سالم است. سایت ما
            با همین هدف طراحی شده است؛ فضایی پویا و الهام‌بخش که با ترکیبی از
            منابع آموزشی معتبر، تمرین‌های عملی، راهکارهای روانشناسی کاربردی و
            محتوای انگیزشی، مسیر پیشرفت را برای شما هموار می‌سازد. ما باور داریم
            که هر فرد توانایی خلق نسخه‌ای بهتر از خود را دارد، نسخه‌ای که
            می‌تواند با اعتماد به نفس بالاتر، تصمیم‌گیری‌های هوشمندانه‌تر و
            نگرشی مثبت‌تر به زندگی نگاه کند. اینجا فرصتی است برای کشف
            توانایی‌های نهفته، تقویت مهارت‌های فردی و اجتماعی، افزایش اعتماد به
            نفس، مدیریت بهتر احساسات و ساختن ذهنیتی قدرتمند که شما را برای
            مواجهه با چالش‌های زندگی آماده می‌سازد. با ما، هر گام شما در مسیر
            یادگیری و رشد، گامی به سوی آینده‌ای روشن‌تر و موفق‌تر خواهد بود.
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
