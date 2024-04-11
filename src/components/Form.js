import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onWeatherInput}>
         <input type='text' name='city' placeholder='Ваш город...'></input>
         <button>Ввести</button>
      </form>
    )
  }
}

export default Form