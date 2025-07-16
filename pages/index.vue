<template>

  <section class="section open-up-animation">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center text-center p-0.5 md:p-2">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">What Is This?</h2>
      <p class="text-lg lg:text-2xl">This is a webpage dedicated to unofficial Bevy Matrix Community.</p>
      <p class="text-lg lg:text-2xl">It is a group of Matrix rooms dedicated to <a href="https://bevy.org" class="underline font-bold">Bevy Engine</a>, a refreshingly simple data-driven game engine built in Rust
        Free and Open Source Forever!</p>
      <p class="text-lg lg:text-2xl">You can join the rooms on this server by pressing the button on the bottom of this page.</p>
      <p class="text-lg lg:text-2xl">This community follows <a href="https://github.com/bevyengine/bevy/blob/main/CODE_OF_CONDUCT.md" class="underline font-bold">Bevy Code of Conduct</a>.</p>

      <button class="min-h-12 max-w-72 w-full border-accent-border border-4 rounded-full bg-accent font-bold text-xl md:text-2xl mt-4 mb-4 m-0.5 transition-all duration-200 ease-out hover:bg-accent-border hover:border-accent active:translate-y-2 active:scale-90"><a href="https://matrix.to/#/#space:bevy.club">Join Community</a></button>
    </div>
  </section>

</template>

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

<script>
export default {
  methods: {
    do_alert(alert_message) {
      alert(alert_message);
    }
  }
}
</script>