import React, { Component } from 'react'

export default class A extends Component {
    componentWillUnmount(): void {
        console.log("tháo gỡ khỏi DOM");
        
    }
  render() {
    return (
      <div>A</div>
    )
  }
}
