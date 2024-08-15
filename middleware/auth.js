// eslint-disable-next-line no-shadow
export default defineNuxtRouteMiddleware(() => {
  const userInformation = useCookie('userInformation');
  if (!userInformation.value) {
    return navigateTo('/authorization');
  }
});
