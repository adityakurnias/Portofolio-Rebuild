<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';



onMounted(() => {
  const lenis = new Lenis();
  gsap.registerPlugin(ScrollTrigger);

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: any) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  requestAnimationFrame(raf);
});
</script>

<style>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>