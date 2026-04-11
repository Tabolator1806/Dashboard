<template>
	<div class="tile">
		<div id="title">{{title}}</div>
		<p id="text">{{text}}</p>
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
			overflow:hidden;
			white-space:pre-line;
		}
	}
</style>
