<template>
  <main class="s-main">
    <!-- <s-loader /> -->
    <swiper v-bind="swiperConfigMain" class="s-main__swiper-vertical">
      <swiper-slide><s-intro /></swiper-slide>
      <swiper-slide><s-second /></swiper-slide>
    </swiper>
    <s-popup-cookie
      v-if="popupCookieIsShow"
      @close-popup="closePopupCookie"
      @close-popup-with-agreement="setArgeementOnCookie"
    />
  </main>
</template>
<script setup>
import { Mousewheel, Pagination } from 'swiper/modules';
const popupCookieIsShow = ref(false);
const userAgreeCookie = useCookie('userAgreeCookie', {
  default: () => null,
  watch: 'shallow',
});

const swiperConfigMain = reactive({
  slidesPerView: '1',
  mousewheel: true,
  direction: 'vertical',
  pagination: {
    clickable: true,
  },
  modules: [Mousewheel, Pagination],
});

const closePopupCookie = () => {
  popupCookieIsShow.value = false;
};

const setArgeementOnCookie = () => {
  popupCookieIsShow.value = false;
  const userChoice = {
    cookie: 'ok',
    maxAge: 60 * 60 * 24 * 7,
  };
  userAgreeCookie.value = userChoice;
};

const getInformationFromCookie = async () => {
  if (!userAgreeCookie.value) {
    setTimeout(() => {
      popupCookieIsShow.value = true;
    }, 2000);
  }
};

onMounted(() => {
  getInformationFromCookie();
});
</script>
