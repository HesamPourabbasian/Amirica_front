<script setup lang="ts">
import { ref } from "vue";

const isPlaying = ref(false);
const audio = new Audio("/music.mp3"); // Make sure file is in public/audio folder

const toggleAudio = () => {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<template>
  <div class="batman">
    <div class="welcome">
      <h1>به امیریکا خوش آمدید</h1>
      <p>ماجراجویی ما از اینجا شروع میشه...</p>
      <div class="btns flex items-center gap-2">
        <!-- Explore Button -->
        <button
          class="explore-btn px-10 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          بزن بریم
        </button>

        <!-- Speaker Button -->
        <button
          @click="toggleAudio"
          class="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition"
        >
          <svg
            v-if="!isPlaying"
            xmlns="/mlogo.svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5L4 9H0v6h4l5 4V5zm7.07 3.07a5 5 0 010 7.07M17.66 7.66l4.68 4.68"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.batman {
  background-image: url("/batman.gif");
  height: 750px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Overlay for readability */
.batman::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* dark overlay */
  border-radius: inherit;
}

/* Centered content */
.welcome {
  position: relative;
  color: #fff;
  z-index: 2;
}

.welcome h1 {
  font-size: 3rem;
  text-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
  animation: glow 2s infinite alternate;
}

.welcome p {
  font-size: 1.2rem;
  margin: 10px 0 20px 0;
  color: #ddd;
}

.explore-btn {
  padding: 12px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.explore-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #ff00cc, 0 0 20px #3333ff;
}

/* Glow animation */
@keyframes glow {
  from {
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff;
  }
  to {
    text-shadow: 0 0 25px #00ffff, 0 0 50px #ff00ff;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .welcome h1 {
    font-size: 2rem;
  }
  .welcome p {
    font-size: 1rem;
  }
  .explore-btn {
    padding: 10px 20px;
  }
}
/* Tablet */
@media (max-width: 1024px) {
  .batman {
    margin-top: 20px;
    height: 600px;
    margin: 40px;
    border-radius: 35px;
  }
} /* Mobile */
@media (max-width: 768px) {
  .batman {
    margin-top: 20px;
    height: 450px;
    margin: 20px;
    border-radius: 25px;
  }
} /* Small mobile */
@media (max-width: 480px) {
  .batman {
    margin-top: 20px;
    height: 300px;
    border-radius: 15px;
    border-width: 5px; /* thinner border for small screens */
  }
}

button {
  transition: transform 0.2s;
}
button:hover {
  transform: scale(1.1);
}
.btns {
  justify-content: center;
  margin-top: 20px;
}
</style>
