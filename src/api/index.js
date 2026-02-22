
async function get(url){
  const response = await fetch(url)
  var message = await response.text()
  message = JSON.parse(message)
  return message
}
const getWeather = (city) => get(`https://danepubliczne.imgw.pl/api/data/synop/station/${city}`)

export {
  getWeather
}
