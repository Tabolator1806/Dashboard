<template>
	<div id="gambling" class="tile">
    <img class="confetti" src="@/assets/images/confetti2.gif" alt="confetti" :style="{opacity:win}"/>
		<div id="title">Gambling</div>
		<div class="content">
			<div class="slot"><img :src="slot1" :alt="slot1"/></div>
			<div class="slot"><img :src="slot2" :alt="slot2"/></div>
			<div class="slot"><img :src="slot3" :alt="slot3"/></div>
			<div id="hand"><input @input="setSlots" type="range" v-model="handValue" max="100" :disabled="disabled"/></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			slot1:"",
			slot2:"",
			slot3:"",
			slotOptions:[7,"m","i","p"],
      handValue:0,
      disabled:false,
      win:0
		}
	},
	methods: {
		setSlots(){
      if(this.handValue==100){
        this.slot1 = this.slotOptions[Math.floor((Math.random(10)*10)%4)]
        this.slot2 = this.slotOptions[Math.floor((Math.random(10)*10)%4)]
        this.slot3 = this.slotOptions[Math.floor((Math.random(10)*10)%4)]
        this.disabled=true
        if(this.slot1 == this.slot2 == this.slot3){
          this.win = 1
        }
      }
		}
	},
  created() {
    setInterval(()=>{
      if(this.handValue>0){
        this.handValue -= 10
      }
      else{
        this.disabled=false
      }
    },50)
  }
}
</script>
<style>
#gambling{
  .confetti{
    position:absolute;
    width:30%;
    height:170px;
  }
  .content{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  #hand{
    input{
      transform:rotate(90deg) translateX(50px);
      width:100px;
    }
    input[type=range]::-webkit-slider-thumb,input[type=range]::-moz-range-thumb{
      -webkit-appearance:none;
      height:15px;
      width:15px;
      border:2px solid;
      border-right-color:var(--lower-border-color);
      border-top-color:var(--upper-border-color);
      border-left-color:var(--upper-border-color);
      border-bottom-color:var(--lower-border-color);
      border-radius:20px;
      background:var(--main-color);
      margin-top:-6px;
    }
  }
}
}
</style>
