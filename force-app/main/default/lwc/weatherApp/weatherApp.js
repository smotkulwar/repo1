import { LightningElement } from 'lwc';
const API_KEY='bebd6a6eb6b3d22e17723b0901f5027a'

import WEATHER_ICONS from '@salesforce/resourceUrl/weatherAppIcons'

export default class WeatherApp extends LightningElement {
clearIcon = WEATHER_ICONS +'/weatherAppIcons/clear.svg'
cloudIcon  =WEATHER_ICONS +'/weatherAppIcons/cloud.svg'
dropletIcon =WEATHER_ICONS +'/weatherAppIcons/droplet.svg'
hazeIcon=WEATHER_ICONS +'/weatherAppIcons/haze.svg'
rainIcon = WEATHER_ICONS +'/weatherAppIcons/rain.svg'
mapIcon = WEATHER_ICONS +'/weatherAppIcons/map.svg'
snowIcon = WEATHER_ICONS +'/weatherAppIcons/snow.svg'
stormIcon = WEATHER_ICONS +'/weatherAppIcons/storm.svg'
thermometerIcon = WEATHER_ICONS +'/weatherAppIcons/thermometer.svg'
arrowBackIcon = WEATHER_ICONS +'/weatherAppIcons/arrow-back.svg'


    cityName = ''
    loadingText = ''
    isError = false
    response
  
    get loadingClasses(){
      return this.isError ? 'error-msg':'success-msg'
    }
    searchHandler(event){
      this.cityName = event.target.value
    }
  
    submitHandler(event){
      event.preventDefault()
      this.fetchData()
    }
  
    fetchData(){
      this.isError = false
      this.loadingText = 'Fetching weather details...'
      console.log("cityName", this.cityName)
      //inside this will call our api
     
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
      fetch(URL).then(res=>res.json()).then(result=>{
          console.log(JSON.stringify(result))
          this.weatherDetails(result)
      }).catch((error)=>{
        console.error(error)
        this.loadingText = "Something went wrong"
        this.isError = true
      })
    }
  
    weatherDetails(info){
      if(info.cod === "404"){
        this.isError = true 
        this.loadingText = `${this.cityName} isn't a valid city name`
      } else {
        this.loadingText = ''
        this.isError = false
        const city = info.name
        const country = info.sys.country
        const {description,id} = info.weather[0]
        const {temp,feels_like,humidity} = info.main

        this.response = {
          city: city,
          temperature: Math.floor(temp),
          location:`${city}, ${country}`,
          description: description,
          feels_like: Math.floor(feels_like),
          humidity : humidity
    
          
        }
      }
    } 

  
}

