<template>
  <section class="laundry-appointment">
    <component :is="HeaderComponent"></component>
    <h2 class="laundry-appointment__title">Записаться на стирку</h2>
    <component :is="CalendarComponent"></component>
  </section>
</template>

<script>

import HeaderComponent from '@/components/Header/Header.vue';
import CalendarComponent from '@/components/Calendar/Calendar.vue';

export default {
  name: 'LaundryAppointment',
  data(){
    return{
      HeaderComponent: HeaderComponent,
      CalendarComponent: CalendarComponent
    }
  },
  components: {
    HeaderComponent,
    CalendarComponent
  }
};
</script>

<style src="@/components/LaundryAppointment/laundry-appointment.css" scoped>

</style>