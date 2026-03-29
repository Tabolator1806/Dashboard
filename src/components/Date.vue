<template>
	<div id="date" class="tile">
		<div id="title">Date</div>
		<div id="content">
			<div id="clock">
				<img alt="face" src="@/assets/images/clock_face2.png"/>
				<img alt="hour" :style="{transform: 'rotate('+setHourArm+'turn)'}" src="@/assets/images/clock_hour_arm.png"/>
				<img alt="minutes" :style="{transform: 'rotate('+setMinutesArm+'turn)'}" src="@/assets/images/clock_hour_arm.png"/>
			</div>
			{{hour}}:{{minutes}}:{{seconds}}
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
				"hour":0,
				"minutes":0,
				"seconds":0,
      	"days":[0,31,59,90,120,151,181,212,242,273,304,334],
			}
		},
		created(){
			this.getTime()
		},
		methods:{
			addZero(inttime){
				const time = String(inttime)
				if(time.length == 1){
					return `0${time}`
				}
				return time
			},
			getTime(){
				const currentDate = new Date(Date.now())
				this.month=currentDate.getMonth()+1
				this.year=currentDate.getFullYear()
				this.day=currentDate.getDate()
				this.hour=currentDate.getHours()
				this.minutes=currentDate.getMinutes()
				this.seconds=currentDate.getSeconds()
				console.log((this.hour*100 + this.minutes)/1200)
				setTimeout(()=>{
						this.getTime()
					},1000
				)
			}
		},
		computed:{
			setHourArm(){
				return (this.hour*100 + this.minutes)/1200
			},
			setMinutesArm(){
				return this.minutes/60
			},
			daysPast(){
				return this.days[this.month] + this.day
			},
			yearProgression(){
				return Math.round(((this.daysPast)/365)*10000)/100
			}
		},
	}
</script>
<style>
#clock{
	width:29%;
	float:left;
	position:relative;
	img{
		margin-top:-13px;
		width:150px;
		height:150px;
	}
	img[alt="hour"]{
		position:absolute;
		left:0;
		top:0;
	}
	img[alt="minutes"]{
		position:absolute;
		left:0;
		top:0;
	}
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
