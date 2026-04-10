<template>
  <div id="weather" class="tile">
    <div id="title">Todays weather</div>
    <div>
      <div id="info">
        - Temperature: {{weather.temperatura}}°C <br/>
        - Pressure: {{weather.cisnienie}} hPa<br/>
        - Wind: {{windDirection}} {{weather.predkosc_wiatru}} km/h<br/>
        - Humidity: {{weather.wilgotnosc_wzgledna}} %
      </div>
      <div id="img">
        {{weatherIcon}}
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
    this.getApiWeather('krakow')
  },
  methods:{
    getApiWeather(place){
      getWeather(place).then(data=>{
        console.log(data)
        this.weather = data
      })
      setTimeout(()=>{
        this.getApiWeather(place)
      },3600)
    }
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
    display:flex;
    flex-direction:column;
    #img{
      flex:1 0 40%;
      text-align:right;
      margin-right:20px;
      font-size:80px;
    }
    #info{
      flex:1 0 60%;
      margin-top:8px;
      text-align:left;
    }
  }
</style>
