<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="./">Home</a>
      
    </nav>
  </header>
  <main>
    <WeatherTile/>
  </main>
</template>
<script>
  import Weather from '@/components/Weather.vue'
export default {
  components:{
    "WeatherTile":Weather
  }
}
</script>

<style scoped></style>
