import React, { Component } from 'react'
interface State{
    value:string;
}
interface Props{

}
export default class Bai3 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            value:"Rikkeiacademy"
        }
    }
    handleChange=()=>{
        this.setState({
            value:'rikkeiSoft'
        })
    }

  render() {
    return (
      <div>
        <p>company: {this.state.value}</p>
        <button  onClick={this.handleChange}>click</button>
      </div>
    )
  }
}
