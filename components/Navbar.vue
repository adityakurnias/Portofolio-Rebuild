<template>
  <nav id="nav"
    class=" w-screen h-fit py-5 px-16 fixed transition-all duration-300 bg-transparent flex items-center justify-between pointer-events-auto">
    <span @click="toTop" class="cursor-pointer text-3xl font-mono">Aditya.</span>
    <img
      class=" w-12 cursor-pointer justify-self-end transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:scale-110"
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

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>

<style></style>