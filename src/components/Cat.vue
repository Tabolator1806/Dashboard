<template>
	<div id="cat" class="tile">
		<div id="title">{{title}}</div>
		<div id="cats">
			<img src="https://cataas.com/cat/says/C?width=125&height=125&skibi=1" alt="cat"/><img src="https://cataas.com/cat/says/A?width=125&height=125&skibi=2" alt="cat"/><img src="https://cataas.com/cat/says/T?width=125&height=125" alt="cat"/>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				title:"Cats",
				src:"https://cataas.com/cat?width=125&height=125"
			}
		}
	}
</script>
<style scoped>
#cats{
	width:100%;
	display:flex;
	flex-direction:row;
	justify-content:space-around;
}
</style>
