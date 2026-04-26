<template>
    <header>
      <nav>
        <RouterLink to="/" exact>Home</RouterLink>
      </nav>
    </header>
    <RouterView/>
</template>
<script>
export default {
  created() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      document.body.style.background= event.matches? "black" : "white"
    });

  }
}
</script>
