<!-- eslint-disable vue/no-parsing-error -->
<template>
  <header class="s-header">
    <div class="s-header__container l-wide">
      <nuxt-link to="/" class="s-header__logo"><ALogo /> </nuxt-link>
      <div class="s-header__logic">
        <div class="s-header__menu" @click="toggleHam">
          <svg :class="['ham hamRotate hamR', { active: isOpen }]" viewBox="0 0 100 100" width="35">
            <path
              class="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path class="line middle" d="m 70,50 h -40" />
            <path
              class="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
        <!--
        <nuxt-link to="/admin" :class="['s-header__link', { 's-header__link-active': currentUser.uid }]">
          <img class="s-header__login-image" src="/images/icons/lk.png" />
        </nuxt-link>
        <button v-if="!currentUser.uid" class="s-header__login" @click="checkLogin">
          <img class="s-header__login-image" src="/images/icons/login.png" />
        </button>
        <button v-else class="s-header__login" @click="loginClean">
          <img class="s-header__login-image" src="/images/icons/logout.png" />
        </button>
        -->
      </div>

      <div :class="['s-header__nav', { active: isOpen }]">
        <nav class="s-header__nav-items">
          <p class="s-header__nav-item">Обо мне</p>
          <p class="s-header__nav-item">Портфолио</p>
          <p class="s-header__nav-item">Галерея</p>
          <p class="s-header__nav-item">Контакты</p>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import ALogo from '~/components/atoms/a-logo/a-logo.vue';
import { useUserStore } from '~/store/user';
const currentUser = useUserStore();
const router = useRouter();
const userInformation = useCookie('userInformation');
const userCorrect = ref(false);

const checkLogin = () => {
  if (!userInformation.value) {
    router.push({ path: '/authorization' });
  }
};
const emit = defineEmits(['handler-change-themes']);
const isOpen = ref(false);
const toggleHam = () => {
  isOpen.value = !isOpen.value;
};
const changeThemes = () => {
  emit('handler-change-themes');
};
const loginClean = () => {
  /* удаление информации о пользователе из стора и кук, редирект на главную страницу */
  currentUser.$reset();
  userInformation.value = null;
  router.push({ path: '/' });
  userCorrect.value = false;
};

const getInformationFromCookie = async () => {
  if (userInformation.value) {
    currentUser.setUser(userInformation.value.email, userInformation.value.id);
    userCorrect.value = true;
  }
};
onMounted(() => {
  getInformationFromCookie();
});
</script>

<style lang="scss">
@import './s-header.scss';
</style>
