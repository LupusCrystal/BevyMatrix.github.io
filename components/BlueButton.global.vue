<template>
    <a class="!text-texty" :href="props.link">
        <button class="min-h-12 max-w-72 w-full border-accent-border border-4 rounded-full bg-accent font-bold text-xl md:text-2xl mt-4 mb-4 m-0.5 transition-all duration-200 ease-out hover:bg-accent-border hover:border-accent active:translate-y-2 active:scale-90"> 
            <slot />
        </button>
    </a>
</template>

<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";
</style>

<script setup>
const props = defineProps({ link: { type: String } })
</script>