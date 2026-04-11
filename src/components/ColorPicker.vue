<template>
	<div class="tile" id="colorpicker">
		<div id="title">Color Picker</div>
		<div id="picker">
			<div id="inputs">
				<input type="range" min="0" max="255" v-model="red" @input="changeColorFromRange"/>
				<input type="range" min="0" max="255" v-model="blue" @input="changeColorFromRange"/>
				<input type="range" min="0" max="255" v-model="green" @input="changeColorFromRange"/>
			</div>
			<div id="showcase">
				<div :style='{width:"100px",height:"100px",background:color}'></div>
			</div>
		</div>
		<input v-model="color"/>
		<button @click="changeColor">Change Color</button>
	</div>
</template>
<script>
export default {
	created(){
		this.red = this.color.slice(4,-1).split(",").map(el=>Number(el))[0]
		this.blue = this.color.slice(4,-1).split(",").map(el=>Number(el))[1]
		this.green = this.color.slice(4,-1).split(",").map(el=>Number(el))[2]
	},
	data() {
		return {
			color:getComputedStyle(document.querySelector(":root")).getPropertyValue("--main-color"),
			red:0,
			blue:0,
			green:0
		}
	},
	methods: {
		changeColor(){
			document.querySelector(":root").style.setProperty("--main-color",this.color)
			document.querySelector(":root").style.setProperty("--upper-border-color",this.changeBrightness(25))
			document.querySelector(":root").style.setProperty("--lower-border-color",this.changeBrightness(-55))
		},
		changeBrightness(t){
			let color = this.color.slice(4,-1).split(",").map(el=>Number(el))
			color[0]+=t;color[1]+=t;color[2]+=t
			console.log(color)
			return `rgb(${color})`
		},
		changeColorFromRange(){
			let color = this.color.slice(4,-1).split(",").map(el=>Number(el))
			color[0]=this.red;color[1]=this.blue;color[2]=this.green
			this.color = `rgb(${color})`
		}
	},
}
</script>
<style scoped>
#picker{
	width:100%;
	display:flex;
	#inputs{
		flex:1 0 70%;
		display:flex;
		flex-direction:column;
		align-content:space-around;
		gap:10px;
		input[type=range]{
			width:100%;
		}
	}
	#showcase{
		flex:1 0 30%;
		display:flex;
		justify-content:center;
	}
}
</style>
