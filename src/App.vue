<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="./">Home</a>
      
    </nav>
  </header>
  <main>
    <WeatherTile/>
    <MusicPlayer/>
  </main>
</template>
<script>
  import Weather from '@/components/Weather.vue'
  import MusicPlayer from '@/components/MusicPlayer.vue'
export default {
  components:{
    "WeatherTile":Weather,
    "MusicPlayer":MusicPlayer
  }
}
</script>

<style scoped>
</style>

