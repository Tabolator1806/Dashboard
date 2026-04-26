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
    document.body.style.background= window.matchMedia('(prefers-color-scheme: dark)').matches? "black" : "white"
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      document.body.style.background= event.matches? "black" : "white"
    });

  }
}
</script>
