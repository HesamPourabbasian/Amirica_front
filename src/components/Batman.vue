<style scoped>
.batman {
  background-image: url("/batman.gif");
  min-height: 80vh; /* scales with screen height */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin: 80px 10px 0 10px;
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
  font-size: clamp(2rem, 4vw, 4rem); /* fluid font */
  text-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
  animation: glow 2s infinite alternate;
}

.welcome p {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  margin: 10px 0 20px 0;
  color: #ddd;
}

.explore-btn {
  padding: 12px 25px;
  font-size: clamp(0.9rem, 1vw, 1.2rem);
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

/* Desktop */
@media (min-width: 1280px) {
  .batman {
    margin: 100px auto 0 auto;
    max-width: 1400px; /* center content */
    border-radius: 40px;
  }
}

/* Ultra wide */
@media (min-width: 1600px) {
  .batman {
    max-width: 1600px;
    border-radius: 50px;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .batman {
    margin: 40px;
    min-height: 600px;
    border-radius: 35px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .batman {
    margin: 20px;
    min-height: 450px;
    border-radius: 25px;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .batman {
    min-height: 300px;
    border-radius: 15px;
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
