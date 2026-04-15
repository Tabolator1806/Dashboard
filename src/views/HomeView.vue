<template>
  <main>
    <WeatherTile/>
    <Date/>
    <Tile title="Description" :text="desc"/>
    <Cat/>
    <BirthdayTile/>
    <MusicPlayer/>
    <Steam/>
    <NameGenerator/>
    <ColorPicker/>
  </main>
</template>
<script>
import Weather from '@/components/Weather.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import Birthdays from '@/components/Birthdays.vue'
import Steam from '@/components/Steam.vue'
import Date from '@/components/Date.vue'
import Tile from '@/components/Tile.vue'
import texts from '@/assets/texts.json'
import Cat from '@/components/Cat.vue'
import NameGenerator from '@/components/NameGenerator.vue'
import ColorPicker from '@/components/ColorPicker.vue'
export default {
  components:{
    "WeatherTile":Weather,
    "MusicPlayer":MusicPlayer,
    "BirthdayTile":Birthdays,
    "Steam":Steam,
    "Date":Date,
    "Tile":Tile,
    "Cat":Cat,
    "NameGenerator":NameGenerator,
    "ColorPicker":ColorPicker
  },
  data() {
    return {
      "testText":texts.testText,
      desc:texts.description
    }
  },
}
</script>

<style scoped>
</style>

