<template>
	<div class="tile" id="NameGenerator">
		<div id="title">Name Generator</div>
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Country of Origin</th>
					<th>*</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><span>{{name}}</span></td>
					<td><span>{{surname}}</span></td>
					<td><select v-model="selectedCountry">
							<option value="random" default>Random</option>
							<option v-for="country in countries" :value="country">{{country}}</option>
					</select></td>
					<td><button @click="losulosu">Generate human</button></td>
				</tr>
			</tbody>
		</table>
	</div class="tile" id="NameGenerator">
</template>
<script>
import names from '@/assets/names.json'
export default {
	data() {
		return {
			name:"Name",
			surname:"Surname",
			countries:Object.keys(names),
			selectedCountry:"random"
		}
	},	
	methods: {
		losulosu(){
			if(this.selectedCountry!="random"){
				const firstnameAmount = names[this.selectedCountry].first.length
				const lastnameAmount = names[this.selectedCountry].last.length
				this.name = names[this.selectedCountry].first[Math.floor(Math.random() * firstnameAmount)]
				this.surname = names[this.selectedCountry].last[Math.floor(Math.random() * lastnameAmount)]
				if (this.name[0]=='f'){
					this.name = this.name.slice(1)
					if(this.surname.includes('/')){
						this.surname=this.surname.split("/")[1]
					}
				}
				else if(this.surname.includes('/')){
					this.surname=this.surname.split("/")[0]
				}
				console.log(Math.floor(Math.random() * firstnameAmount))
			}
			else{
				const nameCountry = names[this.countries[Math.floor(Math.random()*this.countries.length)]]
				console.log(this.countries[Math.floor(Math.random()*this.countries.length)])
				const nameContryAmount = nameCountry.first.length
				const surnameCountry = names[this.countries[Math.floor(Math.random()*this.countries.length)]]
				const surnameContryAmount = surnameCountry.last.length
				this.name = nameCountry.first[Math.floor(Math.random() * nameContryAmount)]
				this.surname = surnameCountry.last[Math.floor(Math.random() * surnameContryAmount)]
				if (this.name[0]=='f'){
					this.name = this.name.slice(1)
					if(this.surname.includes('/')){
						this.surname=this.surname.split("/")[1]
					}
				}
				else if(this.surname.includes('/')){
					this.surname=this.surname.split("/")[0]
				}
			}
		}
	},
}
</script>
<style scoped>
table{
	width:100%;
	td{
		text-align:center;
	}
	select{
		width:80%;
	}
}
</style>
