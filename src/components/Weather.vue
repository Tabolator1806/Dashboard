<template>
  <div id="weather" class="tile">
    <div id="title">Todays weather</div>
    <div>
      <div id="img">
        {{weatherIcon}}
      </div>
      <div id="info">
        Temperature: {{weather.temperatura}} C <br/>
        Pressure: {{weather.cisnienie}} hPa<br/>
        Wind: {{windDirection}} {{weather.predkosc_wiatru}} km/h<br/>
        Humidity: {{weather.wilgotnosc_wzgledna}} %
      </div>
    </div>
  </div>
</template>
<script>
  import { getWeather } from '@/api'
export default {
  data() {
    return {
      "weather":{},
    }
  },
  created(){
    getWeather('krakow').then(data=>{
      console.log(data)
      this.weather = data
    })
  },
  computed: {
    weatherIcon(){
      if(this.weather.suma_opadu>0){
        if(this.weather.temperatura<0){
          return ""
        }
        return ""
      }
      return ""
    },
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
  #weather{
    width:350px;
    #img{
      width:29%;
      float:left;
      text-align:center;
      font-size:80px;
    }
    #info{
      width:70%;
      float:left;
      text-align:right;
      margin-top:8px;
    }
  }
</style>
