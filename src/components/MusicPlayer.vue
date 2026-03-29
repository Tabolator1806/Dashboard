<template>
  <div id="musicplayer" class="tile">
    <div id="title">Music Player</div>
    <div id="main">
      <div id="image">
        <img :src="album" alt="albumImage" width="100px" height="100px"/>
      </div>
      <div id="info">
        <h2>{{title}} - {{author}}</h2>
        <div id="time">{{showCurrentTime}}/{{showDuration}}</div>
        <input type="range" :max="trackduration" v-model="audio.currentTime" id="timeslider"/><br/>
        <div id="controls">
          <div id="buttons">
            <button @click="changeTrack(-1)">󰒮</button>
            <button @click="playTrack" v-if="playswitch">󰐊</button>
            <button @click="stopTrack" v-else="playswitch">󰏤</button>
            <button @click="changeTrack(1)">󰒭</button>
          </div>
          <div id=volume>
            <button @click="mute">{{showVolume}}</button><input type="range" :max="1" step="0.1" v-model="volume" @input="setVolume"/>
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
      author:"unknown",
      audio:"",
      playswitch:true,
      trackduration:0,
      currenttracktime:0,
      volume:1,
      autoplay:false,
      savedVolume:1
    }
  },
  methods: {
    refresh(){
      this.album = "/src/assets/images/" + this.musiclist[this.index].album + ".png"
      this.title = this.musiclist[this.index].title
      this.author = this.musiclist[this.index].author
      if (this.audio!="")
        this.audio.pause()
      this.audio = new Audio(`/src/assets/music/${this.musiclist[this.index].title}.mp3`)
      this.currenttracktime = 0
      this.audio.addEventListener("loadeddata",()=>{
        this.trackduration = this.audio.duration
        this.audio.volume = this.volume
      })
    this.audio.addEventListener("playing",()=>this.trackTime())
    },
    playTrack(){
      this.audio.play()
      this.playswitch = false
      this.autoplay = true
    },
    stopTrack(){
      this.audio.pause()
      this.playswitch = true
      this.autoplay = false
    },
    changeTrack(number){
      this.index = (this.index + number)%(this.musiclist.length)
      if (this.index<0) this.index = (this.musiclist.length) + this.index
      this.refresh()
      if (this.autoplay)
        this.playTrack()
    },
    trackTime(){
      this.currenttracktime=this.audio.currentTime
      this.audio.volume = this.volume
      if(this.autoplay&&this.trackduration==this.currenttracktime){
        this.changeTrack(1)
      }
      setTimeout(() => {
        if(!this.playswitch){
          this.trackTime()
        }
      }, 100);
    },
    addZero(time){
      if(time.length == 1){
        return `0${time}`
      }
      return time
    },
    mute(){
      if(this.volume){
        this.savedVolume = this.volume
        this.volume=0
      }
      else{
        this.volume = this.savedVolume
      }
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
    },
    showVolume(){
      if (this.volume>0.5) return "󰕾"
      if (this.volume<=0.5&&this.volume!=0) return "󰖀"
      if (this.volume==0) return "󰝟"
    },
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
            border-top-color:rgb(55, 200, 106);
            border-right-color:rgb(35, 128, 68);
            border-bottom-color:rgb(35, 128, 68);
            border-left-color:rgb(55, 200, 106);
          }
        }
        #buttons{
          display:flex;
          position:absolute;
          right:45%;
          bottom:40%;
          button{
            width:25px;
            border-top-color:rgb(55, 200, 106);
            border-right-color:rgb(35, 128, 68);
            border-bottom-color:rgb(35, 128, 68);
            border-left-color:rgb(55, 200, 106);
          }
        }
      }
    }
  }
}
</style>
