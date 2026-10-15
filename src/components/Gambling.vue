<template>
	<div id="gambling" class="tile">
		<div id="title">Gambling</div>
		<div id="content">
			<div class="slot">{{slot1}}<img :src="slot1"/></div>
			<div class="slot">{{slot2}}<img :src="slot2"/></div>
			<div class="slot">{{slot3}}<img :src="slot3"/></div>
			<div id="hand"><input @click="setSlots" type="range" value="0"/></div>
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
			slotOptions:[7,"m","i","p"]
		}
	},
	methods: {
		setSlots(){
			//this.slot1 = this.slotOptions[math.random(0) % 4]
			alert(Math.random(10))
		}
	},
}
</script>
<style>
#content{
	#hand{
		input{
			transform:rotate(90deg);
			width:100px;
		}
	}
}
	
</style>
