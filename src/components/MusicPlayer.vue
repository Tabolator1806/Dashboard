<template>
  <div id="musicplayer" class="tile">
    <div id="image">
      <img :src="album" alt="albumImage" width="70px" height="70px"/>
    </div>
    <div id="info">
      <h2>{{title}}</h2>
      <button @click="prevTrack">Previous</button>
      <button @click="playMusic" v-if="playswitch">Play</button>
      <button @click="stopMusic" v-else="playswitch">Stop</button>
      <button @click="nextTrack">Next</button>
    </div>
  </div>
</template>
<script>
  import list from '@/assets/musiclist.json'
export default {
  data() {
    return {
      index:0,
      musiclist:list.list,
      album:"",
      title:"",
      audio:"",
      playswitch:true
    }
  },
  methods: {
    refresh(){
      this.album = "/src/assets/images/" + this.musiclist[this.index].album + ".png"
      this.title = this.musiclist[this.index].title
      this.audio = new Audio(`/src/assets/music/${this.musiclist[this.index].title}.mp3` )
    },
    playMusic(){
      this.audio.play()
      this.playswitch = false
    },
    stopMusic(){
      this.audio.pause()
      this.playswitch = true
    },
    nextTrack(){
      this.stopMusic()
      this.index += 1
      this.refresh()
    },
    prevTrack(){
      this.stopMusic()
      this.index -= 1
      this.refresh()
    }
  },
  created(){
    this.refresh()
  }
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
</style>
