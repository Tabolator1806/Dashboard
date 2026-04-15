<template>
	<div id="cat" class="tile">
		<div id="title"><a href="https://cataas.com">{{title}}</a></div>
		<div id="cats">
			<img :src="firstsrc" alt="cat" @click="rollFirst"/>
			<img :src="secondsrc" alt="cat" @click="rollSecond"/>
			<img :src="thirdsrc" alt="cat" @click="rollThird"/>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				title:"Cats",
				firstsrc:"https://cataas.com/cat/says/C?width=125&height=125&skibi=1",
				secondsrc:"https://cataas.com/cat/says/A?width=125&height=125&skibi=2",
				thirdsrc:"https://cataas.com/cat/says/T?width=125&height=125&skibi=3",
			}
		},
		methods: {
			rollFirst(){
				this.firstsrc="https://cataas.com/cat/says/C?width=125&height=125&skibi="+Math.round(Math.random()*100)
				this.meow()
			},
			rollSecond(){
				this.secondsrc="https://cataas.com/cat/says/A?width=125&height=125&skibi="+Math.round(Math.random()*100)
				this.meow()
			},
			rollThird(){
				this.thirdsrc="https://cataas.com/cat/says/T?width=125&height=125&skibi="+Math.round(Math.random()*100)
				this.meow()
			},
			meow(){
				const sound = new Audio(`/src/assets/meows/meow${Math.floor(Math.random()*4)}.mp3`)
				sound.play()
			}
		},

	}
</script>
<style scoped>
#cats{
	display:flex;
	flex-direction:row;
	justify-content:space-around;
}
a{
	color:var(--main-color);
	text-decoration:none;
	font-weight:bold;
	letter-spacing:5px;
	font-size:18px;
}
img{
	cursor:pointer;	
}
</style>
