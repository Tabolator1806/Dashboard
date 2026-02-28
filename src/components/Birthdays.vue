<template>
  <div id="birthdays" class="tile">
    <div id="title" v-if="daysleft">Coming Birthday</div>
    <div id="title" v-else="daysleft">Todays Birthday</div>
    <div id="display">
      <div v-if="daysleft">{{daysleft}}</div>
      <div v-else="daysleft"></div>
    </div>
    <div id="info">
      Name: {{fullname.split(" ")[0]}} <br/>
      Surname: {{fullname.split(" ")[1]}}<br/>
      Birth Date: {{birthdate}}<br/>
      Age: {{age}}<br/>
      Sign: {{sign}}
    </div>
  </div>
</template>
<script>
import birthdays from '@/assets/birthdays.json'
export default {
  created(){
    const currentDate = new Date(Date.now())
    const currentMonth = currentDate.getMonth()
    const daysThatHappened = this.showInDays(Date.now())
    let nextBirthdayPerson = {}
    for(let i = 0; i < this.birthdaylist.length; i++){
      const person = this.birthdaylist[i]
      const daysToBirthday = this.showInDays(person.birthdate) - daysThatHappened
      if(daysToBirthday>=0){
        const birthdate = new Date(person.birthdate)
        nextBirthdayPerson = person
        this.fullname=person.fullname
        this.birthdate = `${this.addZero(birthdate.getDate())}.${this.addZero(birthdate.getMonth()+1)}.${birthdate.getFullYear()}`
        this.daysleft = daysToBirthday
        this.age = currentDate.getFullYear() - birthdate.getFullYear()
        this.sign = this.getAstrologySign(this.showInDays(person.birthdate))
        break
      }
    }
    console.log(nextBirthdayPerson)
  },
  data() {
    return {
      birthdaylist:birthdays.list,
      days:[0,31,59,90,120,151,181,212,242,273,304,334],
      fullname:"",
      birthdate:"",
      daysleft:0,
      age:0,
      sign:""
    }
  },
  methods: {
    showInDays(timestamp){
      const date = new Date(timestamp)
      const days = date.getDate()
      const month = date.getMonth()
      return this.days[month] + days
    },
    getNextBirthdayPersonIndex(daysThatHappened){
        this.birthdaylist.forEach((person,i) => {
          const daysToBirthday = this.showInDays(person.birthdate) - daysThatHappened
          return i
      });
    },
    addZero(inttime){
      const time = String(inttime)
      if(time.length == 1){
        return `0${time}`
      }
      return time
    },
    getAstrologySign(days){
      if (days>=20&&days<=this.days[1]+18) return "Aquarius 󰩽"
      if (days>=this.days[1]+19&&days<=this.days[2]+20) return "Pisces 󰪄"
      if (days>=this.days[2]+21&&days<=this.days[3]+19) return "Aries 󰩾"
      if (days>=this.days[3]+20&&days<=this.days[4]+20) return "Taurus 󰪇"
      if (days>=this.days[4]+21&&days<=this.days[5]+20) return "Gemini 󰪁"
      if (days>=this.days[5]+21&&days<=this.days[6]+21) return "Cancer 󰩿"
      if (days>=this.days[6]+23&&days<=this.days[7]+22) return "Leo 󰪂"
      if (days>=this.days[7]+23&&days<=this.days[8]+22) return "Virgo 󰪈"
      if (days>=this.days[8]+23&&days<=this.days[9]+22) return "Libra 󰪃"
      if (days>=this.days[9]+23&&days<=this.days[10]+21) return "Scorpio 󰪆"
      if (days>=this.days[10]+22&&days<=this.days[11]+21) return "Sagittarius 󰪅"
      if (days>=this.days[11]+22&&days<=19) return "Capricorn 󰪀"

    }
  },

}
</script>

<style>
#birthdays{
  #display{
    width:29%;
    float:left;
    text-align:center;
    div{
      font-size:80px;
    }
  }
  #info{
    width:70%;
    float:left;
    text-align:right;
  }
}
</style>
