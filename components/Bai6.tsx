import React, { Component } from 'react'
interface State{
    mes:string
}

export default class Bai6 extends Component<State> {
  render() {
    return (
      <div>
      <h3>Message: {this.props.mes}</h3>

      </div>
    )
  }
}
