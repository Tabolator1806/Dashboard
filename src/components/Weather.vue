<template>
  <div id="weather" class="tile">
    <h2>
      Todays weather
    </h2>
    <div id="img">
      <img/>
    </div>
    <div id="info">
      Temperature: {{weather.temperatura}} C <br/>
      Pressure: {{weather.cisnienie}} hPa<br/>
      Wind: {{windDirection}} {{weather.predkosc_wiatru}} km/h<br/>
      
    </div>
  </div>
</template>
<script>
  import { getWeather } from '@/api'
export default {
  data() {
    return {
      "weather":{}
    }
  },
  created(){
    getWeather('krakow').then(data=>{
      console.log(data)
      this.weather = data
    })
  },
  computed: {
    windDirection(){
      const direction = this.weather.kierunek_wiatru
      if (direction>330&&direction<30){
        return "󰁔"
      }
      else if (direction>30&&direction<60){
        return "󰁜"
      }
      else if (direction>60&&direction<120){
        return "󰁝"
      }
      else if (direction>120&&direction<160){
        return "󰁛"
      }
      else if (direction>160&&direction<210){
        return "󰁍"
      }
      else if (direction>210&&direction<240){
        return "󰁂"
      }
      else if (direction>240&&direction<300){
        return "󰁅"
      }
      else if (direction>300&&direction<330){
        return "󰁃"
      }
    }
  },
}
</script>
<style>
  h2{
    text-align:center;
    width:100%;
  }
  #img{
    width:150px;
    float:left;
    background:red;
  }
  #info{
    margin-left:50px;
    width:150px;
    float:left;
  }
</style>
