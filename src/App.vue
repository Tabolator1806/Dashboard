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
    <BirthdayTile/>
  </main>
</template>
<script>
import Weather from '@/components/Weather.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import Birthdays from '@/components/Birthdays.vue'
export default {
  components:{
    "WeatherTile":Weather,
    "MusicPlayer":MusicPlayer,
    "BirthdayTile":Birthdays
  }
}
</script>

<style scoped>
</style>

