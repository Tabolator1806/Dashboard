<template>
	<div class="tile">
		<div id="title">{{title}}</div>
		<div id="text">{{text}}</div>
	</div>
</template>
<script>
	export default {
		props:{
			title: String,
			text: String
		}
	}
</script>
<style>
	.tile{
		#title{

		}
		#text{
			overflow:hidden !important;
		}
	}
</style>
