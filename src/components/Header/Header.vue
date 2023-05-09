<template>
  <section class="header">
    <div class="header__info">
      <div class="header__info_logo">ЛОГО</div>
      <select class="header__info_list" v-model="selectedOption" id="select-option">
        <option value="" disabled>Общежития</option>
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <div class="header__info_support">Теходдержка</div>
    </div>
    <router-link class="header__auth" to="/auth">Регистрация</router-link>
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      selectedOption: '',
      options: [1, 2, 3]
    }
  }
}

</script>

<style src="./header.css" scoped>

</style>