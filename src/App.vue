<template>
  <section class="main">
    <router-view></router-view>
  </section>
</template>


<script>
import MainPage from "./components/MainPage/MainPage";


export default {
  name: 'App',
  data() {
    return {
      MainPage: MainPage
    }
  },
  components: {
    MainPage
  }
}
</script>

<style src="./app.css"></style>
