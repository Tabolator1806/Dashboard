
async function get(url){
  const response = await fetch(url,{
    method:"get",
  })
  var message = await response.text()
  message = JSON.parse(message)
  return message
}
const getWeather = (city) => get(`https://danepubliczne.imgw.pl/api/data/synop/station/${city}`)
const getSteam = (id) => get(`https://api.steamplaytime.com/profile/${id}`)

export {
  getWeather,
  getSteam
}
