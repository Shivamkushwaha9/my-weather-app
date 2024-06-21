const baseurl = "https://api.weatherapi.com/v1/current.json?key=15586a5cc99543248d9151410242006&q"


export const weatherapi = async (city) => {
    const response = await fetch(`${baseurl}=${city}&aqi=yes`)
    return await response.json(); 
}


export const weatherapiuser = async (lat,long) => {
    const response = await fetch(`${baseurl}=${lat},${long}&aqi=yes`)
    return await response.json(); 
}