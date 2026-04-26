<template>
  <div id="birthdays" class="tile">
    <div id="title" v-if="daysleft">Incoming Birthday</div>
    <div id="title" v-else="daysleft">Todays Birthday</div>
    <div id="display">
      <div v-if="daysleft">
        <div style="font-size:75px;">{{daysleft}}</div>
        <div style="font-size:20px;margin-top:-10px;">days</div>
      </div>
      <div v-else="daysleft"></div>
    </div>
    <div id="info">
      Full Name: {{fullname}} <br/>
      Birth Date: {{birthdate}}<br/>
      <span v-if="deathdate" style="font-size:20px">Death Date: {{deathdate}}<br/></span>
      Age: {{age}}<br/>
      Sign: {{sign}}
    </div>
  </div>
</template>
<script>
import birthdays from '@/assets/birthdays.json'
export default {
  created(){
    const daysThatHappened = this.showInDays(Date.now())
    let birthdayPeople = []
    for(let i = 0; i < this.birthdaylist.length; i++){
      const person = this.birthdaylist[i]
      const daysToBirthday = this.showInDays(person.birthdate) - daysThatHappened
      if(daysToBirthday>=0){
        person.daysToBirthday = daysToBirthday
        birthdayPeople.push(person)
      }
    }
    this.sortByDaysLeft(birthdayPeople)
    this.showInfo(birthdayPeople[0])
  },
  data() {
    return {
      birthdaylist:birthdays.list,
      days:[0,31,59,90,120,151,181,212,242,273,304,334],
      fullname:"",
      birthdate:"",
      deathdate:"",
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
    },
    showInfo(person){
        const birthdate = new Date(person.birthdate)
        const deathdate = person.deathdate? new Date(person.deathdate) : 0
        this.fullname=person.fullname
        this.birthdate = `${this.addZero(birthdate.getDate())}.${this.addZero(birthdate.getMonth()+1)}.${birthdate.getFullYear()}`
        this.deathdate = `${this.addZero(deathdate.getDate())}.${this.addZero(deathdate.getMonth()+1)}.${deathdate.getFullYear()}`
        this.daysleft = person.daysToBirthday
        this.age = deathdate? (deathdate.getFullYear() - birthdate.getFullYear()) : (new Date(Date.now())).getFullYear() - birthdate.getFullYear()
        this.sign = this.getAstrologySign(this.showInDays(person.birthdate))
    },
    sortByDaysLeft(array){
      for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - 2; j++){
          const first = array[i].daysToBirthday
          const second = array[j].daysToBirthday
          if(first<second){
            let tmp = array[i]
            array[i] = array[j]
            array[j] = tmp
          }
        }
      }
    }
  }

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
  #info{
    width:70%;
    float:left;
    text-align:right;
    span{
      font-size:20px;
    }
  }
}
}
</style>
