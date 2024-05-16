import React, { Component } from 'react'
interface State{
    slogan:string
}
interface Props{

}
export default class Bai4 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            slogan:"Học code để đi làm"
        }
    }
    handleClick=()=>{
        this.setState({
            slogan:"“Học code sẽ thành công. Cố lên!!!”"

        })
    }
  render() {
    return (
      <div>
        <p>Slogan: {this.state.slogan}</p>
        <button onClick={this.handleClick}>Change state</button>
      </div>
    )
  }
}
