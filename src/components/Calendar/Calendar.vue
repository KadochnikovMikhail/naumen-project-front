<template>
  <section class="calendar" @click="handleOutsideClick">
    <Calendar
        :options="calendarOptions"
    />
    <div v-if="selectedEvent"
         :style="cardPosition"
         class="event-card"
    >
      <button class="event-card__btn" @click="closeEventCard">
        <img
            class="event-card__btn_img"
            src="@/assets/images/cross.svg"
            alt="cross"
        >
      </button>

      <h3 class="event-card__title">{{ selectedEvent.title }}</h3>
      <p class="event-card__info" v-if="selectedEvent.extendedProps.description">
        Кем:
        {{ selectedEvent.extendedProps.description }}
      </p>
      <p class="event-card__info">{{ selectedEvent.extendedProps.machine }}</p>
      <p class="event-card__info">
        Время: {{ formatEventTime(selectedEvent.start) }} -
        {{ formatEventTime(selectedEvent.end) }}
      </p>
    </div>
  </section>
</template>

<script>
import Calendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ruLocale from './ru.js';

//TODO Реализовать закрыте по клику вне карточки и, когда делаем скролл каленадря

export default {
  name: 'CalendarComponent',
  components: {
    Calendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ interactionPlugin, timeGridPlugin ],
        initialView: 'timeGridWeek',
        locale: ruLocale,
        firstDay: 1,
        allDaySlot: false,
        contentHeight: 300,
        eventClick: this.handleEventClick,
        events: [
          {
            id: 1,
            title: 'Занято',
            extendedProps: { description: 'Димон', machine: '№1' },
            start: '2023-05-21T10:00:00',
            end: '2023-05-21T14:15:00'
          },
          {
            id: 2,
            title: 'Занято',
            extendedProps: { description: 'Мишаня', machine: '№2' },
            start: '2023-05-21T10:00:00',
            end: '2023-05-21T14:15:00'
          },
          {
            id: 3,
            title: 'Занято',
            extendedProps: { description: 'Вася', machine: '№3' },
            start: '2023-05-21T10:00:00',
            end: '2023-05-21T14:15:00'
          },
        ]
      },
      selectedEvent: null,
      cardPosition: {
        top: 0,
        left: 0
      }
    };
  },
  methods: {
    handleEventClick(info) {
      const eventBlock = info.el;

      // Проверяем наличие блока события в выбранной ячейке
      if (eventBlock) {
        const rect = eventBlock.getBoundingClientRect();

        // Устанавливаем координаты карточки относительно блока события
        this.cardPosition = {
          top: rect.top + 'px',
          left: rect.left +'px' // Изменено свойство left для смещения вправо
        };

        this.selectedEvent = info.event;
      }
    },


    closeEventCard() {
      this.selectedEvent = null;
    },
    formatEventTime(time) {
      return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
};
</script>

<style src="@/components/Calendar/calendar.css">
</style>
