<template>
  <section class="auth">
    <h1 class="auth__title">Вход</h1>
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
      <button class="auth__form_button">Войти</button>
    </form>

    <p class="auth__sign-up-text">Еще нет акаунта? <router-link class="auth__sign-up-btn" to="/sign-up">Зарегистрируйся</router-link></p>
  </section>
</template>

<script>
export default {
  name: "SignInComponent",
  data(){
    return{

    }
  }
}
</script>

<style src="./sign-in.css" scoped>

</style>