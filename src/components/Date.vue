<template>
	<div id="date" class="tile">
		<div id="title">Date</div>
		<div id="content">
			<div id="clock">
				a
			</div>
			<div id="info">
				Todays Date: {{addZero(day)}}.{{addZero(month)}}.{{year}}<br/>
				<div id="bar"><div id="progress" :style="{width: yearProgression+'%'}">{{yearProgression}}%</div></div>
				<br/>{{daysPast}} days has passed
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				"year":0,
				"month":0,
				"day":0,
				"yearProgression":0,
      	"days":[0,31,59,90,120,151,181,212,242,273,304,334],
				"daysPast":0
			}
		},
		created(){
			const currentDate = new Date(Date.now())
			this.year=currentDate.getFullYear()
			this.month=currentDate.getMonth()+1
			this.day=currentDate.getDate()
			this.daysPast = this.days[this.month] + this.day
			this.yearProgression = Math.round(((this.daysPast)/365)*10000)/100
		},
		methods:{
			addZero(inttime){
				const time = String(inttime)
				if(time.length == 1){
					return `0${time}`
				}
				return time
			},
		}
	}
</script>
<style>
#clock{
	width:29%;
	float:left;
}
#info{
	width:70%;
	float:left;
	text-align:right;
	position:relative;
}
#bar{
	width:250px;
	background:gray;
	color:black;
	position:absolute;
	right:3px;
	#progress{
		background:#2DA457;
	}
}
</style>
