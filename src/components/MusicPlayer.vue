<template>
  <div id="musicplayer" class="tile">
    <div id="title">Music Player</div>
    <div id="main">
      <div id="image">
        <img :src="album" alt="albumImage" width="100px" height="100px"/>
      </div>
      <div id="info">
        <h2>{{title}}</h2>
        <div id="time">{{showCurrentTime}}/{{showDuration}}</div>
        <input type="range" :max="trackduration" v-model="audio.currentTime" id="timeslider"/><br/>
        <div id="controls">
          <div id="buttons">
            <button @click="prevTrack">󰒮</button>
            <button @click="playTrack" v-if="playswitch">󰐊</button>
            <button @click="stopTrack" v-else="playswitch">󰏤</button>
            <button @click="nextTrack">󰒭</button>
          </div>
          <div id=volume>
            <button>M</button><input type="range" :max="1" step="0.1" v-model="audio.volume"/>
          </div>
        </div>
      </div>
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
      autoplay:true
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
      this.playTrack()
    },
    prevTrack(){
      this.stopTrack()
      if (this.index>0)
        this.index -= 1
      this.refresh()
      this.playTrack()
    },
    trackTime(){
      this.currenttracktime=this.audio.currentTime
      if(this.autoplay&&this.trackduration==this.currenttracktime){
        this.nextTrack()
      }
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
#musicplayer{
  width:500px;
  #main{
    display:flex;
    flex-direction:row;

    #image{
      display:flex;
      align-items:center;
      height:100%;
      padding:10px;
    }
    #info{
      width:fit-content;
      flex-grow:1;
      position:relative;
      h2{
        width:100%;
        margin-bottom:10px;
        text-align:center;
      }
      #time{
        width:100%;
        text-align:right;
      }
      #timeslider{
        margin-bottom:10px;
        width:100%;
      }
      #controls{
        display:block;
        position:relative;
        width:100%;
        height:50px;
        #volume{
          position:absolute;
          right:5px;
          bottom:40%;
          display:flex;
          gap:5px;
          input[type=range]{
            width:80px;
          }
          button{
            width:25px;
          }
        }
        #buttons{
          display:flex;
          position:absolute;
          right:45%;
          bottom:40%;
          button{
            width:25px;
          }
        }
      }
    }
  }
}
</style>
