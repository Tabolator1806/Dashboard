<template>
	<div id="gambling" class="tile">
		<div id="title">Gambling</div>
		<div id="content">
			<div class="slot"><img :src="slot1"/></div>
			<div class="slot"><img :src="slot2"/></div>
			<div class="slot"><img :src="slot3"/></div>
			<div id="hand"><input type="range" value="0"/></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			
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
