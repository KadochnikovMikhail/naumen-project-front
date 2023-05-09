<template>
  <section class="main">
    <component :is="HeaderComponent"></component>
    <component :is="CardsGridComponent"></component>
    <button class="main__sign">Зписаться на стрижку</button>
    <h2 class="main__statistics">Статистика</h2>
    <img class="main__img" src="@/assets/images/Statistics.png" alt="Statistics"/>
    <router-view />
  </section>
</template>


<script>
import HeaderComponent from "../Header/Header"
import CardsGridComponent from "../CardsGrid/CardsGrid"
import AuthComponent from "../Auth/Auth"


export default {
  name: 'App',
  data() {
    return {
      HeaderComponent: HeaderComponent,
      CardsGridComponent: CardsGridComponent,
      AuthComponent: AuthComponent,
    }
  },
  components: {
    HeaderComponent,
    CardsGridComponent,
    AuthComponent
  }
}
</script>

<style src="./main-page.css">

</style>
