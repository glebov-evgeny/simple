<template>
  <section class="s-login">
    <div class="s-login__container l-wide">
      <h1 class="s-login__title">Вход</h1>
      <div class="s-login__formbox">
        <form class="s-login__form" :submit-disabled="!validFlag" @submit.prevent="sendForm">
          <input v-model="fieldsData.name" class="s-login__form-input" type="text" placeholder="Имя" />
          <input v-model="fieldsData.password" class="s-login__form-input" type="password" placeholder="Пароль" />
          <button type="submit" class="s-login__form-button">Вход</button>
        </form>
        <p class="s-login__information">Для проверки авторизации использовать логин и пароль: <span>12345</span></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from '~/store/user';
const currentUser = useUserStore();
const router = useRouter();
const userInformation = useCookie('userInformation', {
  default: () => null,
  watch: 'shallow',
});

let fieldsData = reactive({
  name: '',
  password: '',
});

let validFlag = ref(false);

const checkedValidateError = () => {
  return fieldsData.name === '12345' && fieldsData.password === '12345' ? true : false;
};

watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

async function sendForm() {
  if (validFlag.value === true) {
    currentUser.setUser(fieldsData.name, fieldsData.password);
    /* устанавливаю куки с почтой и id пользователя на 7 дней */
    const cookieDataUser = {
      email: fieldsData.name,
      id: fieldsData.password,
      maxAge: 60 * 60 * 24 * 7,
    };
    userInformation.value = cookieDataUser;
    router.push({ path: '/admin' });
  } else {
    console.log('что-то пошло не так');
  }
}
</script>

<style lang="scss">
@import './s-login.scss';
</style>
