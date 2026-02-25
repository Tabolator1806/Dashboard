<template>
  <div id="musicplayer" class="tile">
    <div id="image">
      <img :src="album" alt="albumImage" width="70px" height="70px"/>
    </div>
    <div id="info">
      <h2>{{title}}</h2>
      <div id="time">{{showCurrentTime}}/{{showDuration}}</div>
      <input type="range" :max="trackduration" v-model="audio.currentTime" id="timeslider"/><br/>
      <button @click="prevTrack">Previous</button>
      <button @click="playTrack" v-if="playswitch">Play</button>
      <button @click="stopTrack" v-else="playswitch">Stop</button>
      <button @click="nextTrack">Next</button>
      <input type="range" :max="1" step="0.1" v-model="audio.volume" id="volume"/>
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
  width:fit-content;
  h2{
    width:100%;
    margin-bottom:20px;
  }
  #time{
    width:100%;
    text-align:right;
  }
  #timeslider{
    margin-bottom:20px;
  }
  #volume{
    margin-left:10px;
    width:80px;
  }
}
</style>
