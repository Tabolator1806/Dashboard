<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="./">Home</a>
      
    </nav>
  </header>
  <main>
    <WeatherTile/>
    <Date/>
    <Tile title="Test tile" text="Lorem Ipsum"/>
    <BirthdayTile/>
    <MusicPlayer/>
    <Steam/>
  </main>
</template>
<script>
import Weather from '@/components/Weather.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import Birthdays from '@/components/Birthdays.vue'
import Steam from '@/components/Steam.vue'
import Date from '@/components/Date.vue'
import Tile from '@/components/Tile.vue'
export default {
  components:{
    "WeatherTile":Weather,
    "MusicPlayer":MusicPlayer,
    "BirthdayTile":Birthdays,
    "Steam":Steam,
    "Date":Date,
    "Tile":Tile
  }
}
</script>

<style scoped>
</style>

