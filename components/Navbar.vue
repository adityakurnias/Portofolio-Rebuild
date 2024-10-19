<template>
  <nav id="nav"
    class=" w-screen h-fit py-5 px-16 fixed bg-transparent flex items-center justify-between pointer-events-auto">
    <span class=" text-3xl font-mono">Aditya.</span>
    <img
      class=" w-12 justify-self-end transition-transform duration-100 ease-in-out hover:rotate-[360deg] hover:scale-110"
      src="/img/Icon.png" />
  </nav>
</template>

<script lang="ts" setup>

onMounted(() => {
  const nav: HTMLElement | null = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle("backdrop-blur-sm", window.scrollY > 0)
  })
})
</script>

<style></style>