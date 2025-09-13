<script setup lang="ts">
</script>

<template>
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-50">
    <div class="dock bg-gradient-to-b from-pink-900 via-purple-900 to-purple-950 text-white flex">
      <div class="dock-item flex-1 flex justify-center items-center">
        <router-link to="/user" class="dock-link">
          <span class="material-icons-outlined">dashboard</span>
        </router-link>
      </div>
      <div class="dock-item flex-1 flex justify-center items-center">
        <router-link to="/userProfileEdit" class="dock-link">
          <span class="material-icons-outlined">manage_accounts</span>
        </router-link>
      </div>
      <div class="dock-item flex-1 flex justify-center items-center">
        <router-link to="/userCalEditor" class="dock-link">
          <span class="material-icons-outlined">calendar_month</span>
        </router-link>
      </div>
      <div class="dock-item flex-1 flex justify-center items-center">
        <button
            class="dock-link logout-btn"
            onclick="document.getElementById('logoutModalMobile').showModal()"
        >
          <span class="material-icons-outlined">logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dock {
  height: 70px;
}

.dock-item span {
  font-size: 28px;
  transition: transform 0.2s ease, color 0.3s ease;
}

/* Hover animation for all icons */
.dock-item:hover span {
  transform: translateY(-6px) scale(1.1);
  color: #60a5fa; /* Tailwind blue-400 */
}

/* Active router link (blue icon) */
.router-link-active span {
  color: #3b82f6; /* Tailwind blue-500 */
}

/* Logout button specific red styling */
.logout-btn span {
  color: #f87171 !important; /* Tailwind red-400 */
}
.logout-btn:hover span {
  transform: translateY(-6px) scale(1.1);
  color: #ef4444 !important; /* Tailwind red-500 */
}
</style>
