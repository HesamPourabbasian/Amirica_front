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
      height: "550px",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "",
      },
      navLinks: false,
    });
    calendar.render();
  }
});
</script>

<template>
  <div class="page-wrapper">
    <div id="calendar" class="calendar-luxury"></div>
  </div>
</template>

<style>
.page-wrapper {
  background: linear-gradient(135deg, #0f1423, #121929);
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: start;
  box-sizing: border-box;
}

/* Calendar container */
#calendar {
  max-width: 1000px;
  width: 90%;
  margin-bottom: 60px;
  border-radius: 20px;
  background: linear-gradient(145deg, #1a1f38, #1f253c);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  padding: 20px;
  transition: transform 0.3s ease;
  border: 2px solid #808080; /* Gray border */
}

/* Header title (month name) */
.fc .fc-toolbar-title {
  color: #ff4d4d; /* red accent */
  font-weight: 700;
  font-size: 1.8rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* Toolbar buttons */
.fc .fc-button {
  background: #1f253c;
  color: #a5b0c0;
  border: 2px solid #808080; /* Gray border */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
.fc .fc-button:hover {
  background: #2a3350;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
}

/* Days */
.fc .fc-daygrid-day {
  background: #2a2f48;
  color: #dcdcdc;
  margin: 4px;
  transition: all 0.3s ease;
  border: 1px solid #808080; /* Gray border */
}
.fc .fc-daygrid-day:hover {
  background: #3b4270;
}

/* Today's date */
.fc .fc-daygrid-day.fc-day-today {
  background-color: #28a745 !important;
  color: white;
  font-weight: 700;
  box-shadow: 0 0 10px #28a745;
}

/* Other day numbers */
.fc .fc-daygrid-day-number {
  font-weight: 500;
  color: inherit;
}

/* Weekday headers (Sun–Sat) */
.fc .fc-col-header-cell {
  color: skyblue !important;
  font-weight: 700;
  font-size: 1rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #808080; /* Gray border */
}

/* Day grid table borders */
.fc .fc-daygrid {
  border: 1px solid #808080; /* Gray border for grid container */
}

/* Ensure internal grid lines are gray */
.fc .fc-daygrid-body,
.fc .fc-daygrid-day-frame {
  border-color: #808080; /* Gray border for internal grid lines */
}

/* Responsive */
@media (max-width: 500px) {
  #calendar {
    width: 95%;
    padding: 15px;
  }
  .fc .fc-toolbar-title {
    font-size: 1.5rem;
  }
}
</style>
