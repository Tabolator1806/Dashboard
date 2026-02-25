<template>
  <div id="musicplayer" class="tile">
    <div id="image">
      <img :src="album" alt="albumImage" width="70px" height="70px"/>
    </div>
    <div id="info">
      <h2>{{title}}</h2>
      <h2>{{showCurrentTime}}/{{showDuration}}</h2>
      <input type="range" :max="trackduration" v-model="audio.currentTime"/>
      <button @click="prevTrack">Previous</button>
      <button @click="playTrack" v-if="playswitch">Play</button>
      <button @click="stopTrack" v-else="playswitch">Stop</button>
      <button @click="nextTrack">Next</button>
    </div>
  </div>
</template>
<script>
import list from '@/assets/musiclist.json'
export default {
  created(){
    this.refresh()
  },
  data() {
    return {
      index:0,
      musiclist:list.list,
      album:"",
      title:"",
      audio:"",
      playswitch:true,
      trackduration:0,
      currenttracktime:0,
      volume:0,
    }
  },
  methods: {
    refresh(){
      this.album = "/src/assets/images/" + this.musiclist[this.index].album + ".png"
      this.title = this.musiclist[this.index].title
      this.audio = new Audio(`/src/assets/music/${this.musiclist[this.index].title}.mp3`)
      this.currenttracktime = 0
      this.audio.addEventListener("loadeddata",()=>{
        this.trackduration = this.audio.duration
        this.volume = this.audio.volume
      })
    this.audio.addEventListener("playing",()=>this.trackTime())
    },
    playTrack(){
      this.audio.play()
      this.playswitch = false
    },
    stopTrack(){
      this.audio.pause()
      this.playswitch = true
    },
    nextTrack(){
      this.stopTrack()
      if (this.index<this.musiclist.length-1)
        this.index += 1
      this.refresh()
    },
    prevTrack(){
      this.stopTrack()
      if (this.index>0)
        this.index -= 1
      this.refresh()
    },
    trackTime(){
      this.currenttracktime=this.audio.currentTime
      setTimeout(() => {
        if(!this.playswitch){
          this.trackTime()
        }
      }, 1000);
    },
    addZero(time){
      if(time.length == 1){
        return `0${time}`
      }
      return time
    }
  },
  computed: {
    showCurrentTime(){
      const seconds = String(Math.floor((this.currenttracktime) % 60))
      const minutes = String(Math.floor((this.currenttracktime) / 60))
      return `${this.addZero(minutes)}:${this.addZero(seconds)}`
    },
    showDuration(){
      const seconds = String(Math.floor((this.trackduration) % 60))
      const minutes = String(Math.floor((this.trackduration) / 60))
      return `${this.addZero(minutes)}:${this.addZero(seconds)}`
    }
  },
}
</script>
<style scoped>
#image{
  display:flex;
  align-items:center;
  height:100%;
  float:left;
  padding-left:30px;
}
#info{
  float:left;
}
#info h2{
  width:100%
}
input[type=range]{
  -webkit-appearance:none;
  margin-bottom:10px;
}
input[type=range]::-webkit-slider-runnable-track{
  background:#2DA457;
  height:3px;
  width:100%;
}
input[type=range]::-webkit-slider-thumb{
  -webkit-appearance:none;
  height:12px;
  width:6px;
  border:2px solid;
  border-top-color:rgb(55, 200, 106);
  border-right-color:rgb(35, 128, 68);
  border-bottom-color:rgb(35, 128, 68);
  border-left-color:rgb(55, 200, 106);
  background:#2DA457;
  margin:-6px;
}
</style>
