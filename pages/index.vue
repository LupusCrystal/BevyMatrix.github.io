<template>

  <section class="section open-up-animation">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center text-center p-0.5 md:p-2">
      <ContentRenderer id="markdown-page" v-if="home" :value="home" />
      <div v-else>Home not found</div>
    </div>
  </section>

</template>

<script setup lang="ts">
const route = useRoute()
const { data: home } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
</script>

<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";

.open-up-animation {
  animation: open-up-animation 3s ease-in-out 0s;
  clip-path: circle(300% at 50% 50%);
}

@keyframes open-up-animation {
  0% {clip-path: circle(0% at 50% 50%);}
  100% {clip-path: circle(300% at 50% 50%);}
}

/* A class for section that holds common section styling. I added background to each section individualy. */
.section {
  @apply w-screen min-h-screen relative bg-cover bg-center border-b-4 border-texty/50 text-texty;
}

/* Applied to a div container to make the background darker. It must be positioned in an absolute way, while other components are relative. */
.darkener {
  @apply absolute bg-black/50 inset-0;
}

</style>