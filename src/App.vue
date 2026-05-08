<template>
    <header>
      <nav>
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about" exact>About</RouterLink>
        <RouterLink to="/music" exact>Music</RouterLink>
        <RouterLink to="/chat" exact>Chat</RouterLink>
        <RouterLink to="/blog" exact>Blog</RouterLink>
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
