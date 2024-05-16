import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string
}
export default class Bai1 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:""
        }
    }
    componentDidMount(): void {
        this.setState({name:'Trang'})
    }
  render() {
    return (
      <div>Bai1
        <p>Tên {this.state.name} xinh gái hihiiiiiiiiiiiiii</p>
      </div>
    )
  }
}
