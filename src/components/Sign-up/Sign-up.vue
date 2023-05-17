<template>
<section class="auth">
  <h1 class="auth__title">Регистрация</h1>
  <form class="auth__form">
    <input class="auth__form_input"
           type="text"
           name="login"
           placeholder="Логин"
           required
    >
    <input class="auth__form_input"
           type="password"
           name="password"
           placeholder="Пароль"
           required
    >
    <button class="auth__form_button">Зарегистрироваться</button>
  </form>
  <p class="auth__sign-in-text">Уже есть акаунт? <router-link class="auth__sign-in-btn" to="/sign-in">Войти</router-link></p>
</section>
</template>

<script>
export default {
  name: "SignUpComponent",
  data(){
    return{

    }
  }
}
</script>

<style src="./sign-up.css" scoped>

</style>