<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="./">Home</a>
      
    </nav>
  </header>
  <main>
    <WeatherTile/>
    <Steam/>
    <BirthdayTile/>
    <MusicPlayer/>
  </main>
</template>
<script>
import Weather from '@/components/Weather.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import Birthdays from '@/components/Birthdays.vue'
import Steam from '@/components/Steam.vue'
export default {
  components:{
    "WeatherTile":Weather,
    "MusicPlayer":MusicPlayer,
    "BirthdayTile":Birthdays,
    "Steam":Steam
  }
}
</script>

<style scoped>
</style>

