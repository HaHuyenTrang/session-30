import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string,
    age:number,
    loading:boolean,
    count:number,
}

export default class ClassComponent extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"Trang",
            age:18,
            loading:true,
            count:0,
        }
    }
    componentDidMount(): void {
        console.log("chạy sau khi component được render lần đầu");
        
    }
    componentWillMount(): void {
        console.log("chạy sau khi constructor khởi tạo xong state");
        /*
            trongm phương thức componentWillMount có thể tính toán lại state
            nhưng lưu ý cái thơi gian chuyển từ phướng thức componentWillMount
            đến phương thức render rất nhanh cho nên lưu ý việc cập nhật State
        */ 
    }
    handleClick=()=>{
        this.setState({
            count:this.state.count+1,
        })
    }
    /*
        các phương thức cung cấp ở trong gia đoạn updating 

    */ 
    shouldComponentUpdate(): boolean {
        //  bắt buộc return về true hoặc fasle
        console.log("shouldComponentUpdate được gọi");
        return true;
    }
    componentWillUpdate(): void {
        console.log("componentWillUpdate đựơc gọi");
        
    }
    componentDidUpdate(): void {
        console.log("componentDidUpdate được gọi");
        
    }
  render() {
    console.log("re-render");
    
    
        // this.setState({
        //     name:"hồng"
        // })
        /*
            phương thức componentDidMount được chạy sau khi component được
            cập nhật vào DOM
            đây là nơi lí tưởng để thực hiện các việc xử lí như call API lấy
            dữ liệu và hiển thị.
        */ 
    
    console.log("component được render lần đầu");
    
    return (
      <div>ClassComponent
        <p>chào {this.state.name}</p>
        <p>giá trị count: {this.state.count}</p>
        <button onClick={this.handleClick}>thay đổi state</button>
      </div>
    )
  }
}
