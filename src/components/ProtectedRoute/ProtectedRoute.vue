<template>
  <component :is="HeaderComponent"></component>
  <section class="protected-route">
    <div class="protected-route__menu">
      <router-link class="protected-route__menu_item" to="/profile">Профиль</router-link>
      <router-link class="protected-route__menu_item" to="/my-washes">Мои стирки</router-link>
      <router-link class="protected-route__menu_item" to="/control-panel">Панель упраления</router-link>
    </div>
    <div class="protected-route__pages">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import HeaderComponent from '@/components/Header/Header';

export default {
  name: 'ProtectedRoute',
  data() {
    return {
      HeaderComponent: HeaderComponent
    };
  },
  components: {
    HeaderComponent
  }
};
</script>

<style src="./protected-route.css" scoped></style>
