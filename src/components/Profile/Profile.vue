<template>
  <section class="profile">
    <h2 class="profile__title">Профиль</h2>
    <div class="profile__fio">
      <h3 class="profile__fio_title">ФИО</h3>
      <input class="profile__fio_input"
             name="name"
             type="text"
             placeholder="Имя"
             required
      >
      <input class="profile__fio_input"
             name="surname"
             type="text"
             placeholder="Фамилия"
             required
      >
    </div>
    <div class="profile__contacts">
      <h3 class="profile__contacts_title">Ваши контакты</h3>
      <input class="profile__contact_input"
             name="telegram"
             type="text"
             placeholder="Telegram"
             required
      >
      <input class="profile__contact_input"
             name="email"
             type="email"
             placeholder="Email"
             required
      >
    </div>
    <div class="profile__notices">
      <h3 class="profile__notices_title">Уведомления</h3>
      <label>
        <input class="profile__notices_item" type="checkbox">
        Отправлять уведомления о завершении стирки
      </label>
      <label>
        <input class="profile__notices_item" type="checkbox">
        Отправлять напоминания о записи на стирку
      </label>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ProfileComponent',
  data(){
    return{
    }
  },

};
</script>

<style src="./profile.css" scoped>

</style>