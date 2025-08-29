<script setup>
import { onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

onMounted(() => {
  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      height: "auto",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "",
      },
      navLinks: false, // prevent clicking day/week from navigating
    });
    calendar.render();
  }
});
</script>

<template>
  <div class="page-wrapper">
    <div id="calendar" class="calendar-rounded"></div>
  </div>
</template>

<style>
.page-wrapper {
  background-color: #121929;
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

#calendar {
  max-width: 1000px;
  width: 90%;
  margin-bottom: 40px;
  box-sizing: border-box;
  overflow: hidden; /* ensures border-radius clips inner elements */
  border-radius: 20px; /* adds 20px rounded corners */
  background-color: #ffffff; /* optional: background for calendar */
}

/* style calendar title (month name) */
.fc .fc-toolbar-title {
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
}

/* style today's date */
.fc .fc-daygrid-day.fc-day-today {
  background-color: green !important;
  color: white;
}

/* style all other days */
.fc .fc-daygrid-day:not(.fc-day-today) {
  background-color: white;
  color: black;
}

/* responsive adjustment */
@media (max-width: 500px) {
  #calendar {
    width: 95%;
    margin-bottom: 30px;
  }
}
</style>
