import React, { Component } from 'react'

export default class Condition extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&  <p>Location: {this.props.city}, {this.props.country}</p> }
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
              
               {this.props.humidity && <p> Humidity:{this.props.humidity} </p>}
               {this.props.description &&<p>Description: {this.props.description}</p>}
             
                
               
            </div>
        )
    }
}
