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

#markdown-page {
    h1 {
        @apply text-3xl md:text-4xl text-center font-bold text-texty;
    }
    h2 {
        @apply text-2xl md:text-3xl text-center font-bold text-texty;
    }
    h3 {
        @apply text-xl md:text-2xl text-center font-bold text-texty;
    }
    h4 {
        @apply text-lg md:text-xl text-center font-bold text-texty;
    }
    p {
        @apply text-2xl md:text-3xl text-texty mt-8 mb-8;
    }
    li {
        @apply text-2xl md:text-3xl text-texty mt-6 mb-6;
    }
    ul {
        @apply list-disc ml-8;
    }
    ol {
        @apply list-decimal ml-8;
    }
    a {
        @apply text-2xl md:text-3xl text-texty/70 mt-6 mb-6 underline;
    }
    hr {
        @apply bg-accent min-h-1.5 rounded-2xl;
    }
    code {
        @apply text-white
    }
}
</style>