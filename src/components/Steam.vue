<template>
	<div id="steam" class="tile">
		<div id="title">Steam Stats</div>
	</div>
</template>
<script>
	import { getSteam } from '@/api'
	export default{
		data() {
			return {
				"data":{},
			}
		},
		created(){
			getSteam('76561198391377502').then(data=>{
				console.log(data)
				this.data = data
			})
		},
	}
</script>

