<template>
    <div id="markdown-page" class="w-full min-h-screen flex flex-col justify-center items-center">
        <ContentRenderer :value="post" />
    </div>
</template>
<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
console.log(post);
</script>
<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";
</style>