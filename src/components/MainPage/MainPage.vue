<template>
  <section class="main">
    <component :is="HeaderComponent"></component>
    <component :is="CardsGridComponent"></component>
    <button class="main__sign">Зписаться на стирку</button>
    <h2 class="main__statistics">Статистика</h2>
    <img class="main__img" src="@/assets/images/Statistics.png" alt="Statistics" />
  </section>
</template>


<script>
import HeaderComponent from "../Header/Header"
import CardsGridComponent from "../CardsGrid/CardsGrid"


export default {
  name: 'MainPage',
  data() {
    return {
      HeaderComponent: HeaderComponent,
      CardsGridComponent: CardsGridComponent,
    }
  },
  components: {
    HeaderComponent,
    CardsGridComponent,
  }
}
</script>

<style src="./main-page.css">

</style>
