<template>
	<div class="tile" id="colorpicker">
		<div id="title">Color Picker</div>
		<div id="picker">
			<div id="inputs">
				<input type="range" min="0" max="255" v-model="red" @input="changeColorFromRange"/>
				<input type="range" min="0" max="255" v-model="green" @input="changeColorFromRange"/>
				<input type="range" min="0" max="255" v-model="blue" @input="changeColorFromRange"/>
			</div>
			<div id="showcase">
				<div :style='{width:"100px",height:"100px",background:color}'></div>
			</div>
		</div>
		<input v-model="color"/>
		<button @click="changeColor">Change Color</button>
		<button @click="randomizeColors">Randomize</button>
		<button @click="rainbowColors">Rainbow</button>
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
			green:0,
			rainbow:0
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
			color[0]=this.red;color[2]=this.green;color[1]=this.blue
			this.color = `rgb(${color})`
		},
		randomizeColors(){
			this.red = Math.floor(Math.random(255) * 200)
			this.blue = Math.floor(Math.random(255) * 200)
			this.green = Math.floor(Math.random(255) * 200)
			this.changeColorFromRange()
			this.changeColor()
		},
		rainbowColors(){
			!this.rainbow ? this.rainbow = 1 : this.rainbow = 0
			if(this.rainbow){
				this.red = 255
				this.blue = 0
				this.green = 0
				setInterval(() => {
					if(this.green < 255 & this.red > 0){
						this.red -= 1
						this.green += 1
					}
					if(this.blue < 255 & this.green > 0){
						this.blue += 1
						this.green -= 1
					}
					this.changeColor()
					this.changeColorFromRange()
				}, 100);
			}
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
