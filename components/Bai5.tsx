import React, { Component } from 'react'
interface State{
    Status:string
}
interface Props{

}
export default class Bai5 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            Status:"close the Form"
        }
    }
    handleClick=()=>{
        this.setState({
            Status:"open the Form"

        })
    }
  render() {
    return (
      <div>
        <p>Status: {this.state.Status}</p>
        <button onClick={this.handleClick}>Change props</button>
      </div>
    )
  }
}
