<template>
  <div id="weather" class="tile">
    <h2>
      Todays weather
    </h2>
    <div id="img">
      <img/>
    </div>
    <div id="info">
      Temperature: {{weather.temperatura}} C
      Pressure: {{weather.cisnienie}} hPa
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
      this.weather = data
    })
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
