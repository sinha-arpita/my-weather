import React, { Component } from 'react'
import Form from "./components/Form"
import Condition from "./components/Condition"
import axios from "axios"
let  API_key ="2d05715263909d557fd4436c36a7c73c"
export default class App extends Component {
  state={
    tempetrature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:""
  }
  getWeather= (event)=>{
    event.preventDefault()
    
    console.log("here....", event.target.element)

    const city= event.target.elements.city.value
    const country= event.target.elements.country.value
    
    const call = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`)
                  .then(res =>{
                    console.log("here is the response",res.data)
                    this.setState({
                      temperature:res.data.main.temp,
                      city:res.data.main.name,
                      humidity:res.data.main.humidity,
                      country:res.data.sys.country,
                      description:res.data.weather[0].description,
                      error:""

                    

                    })

                  }).catch(err=>{
                    console.log("this is the response",err)
                  })
  }
  render() {
    return (
      <div>
        <Form getWeather={this.getWeather}/>
        <Condition temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}/>

      </div>
    )
  }
}
