import React, { Component } from 'react'
import ClassComponent from './components/ClassComponent'
import A from './components/A'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'

// export default function App() {
//   const [active,setActive] = useState<boolean>(false)
//   const removeComponent=()=>{
//     console.log("gọi remove");
//     setActive(!active)
//   }
//   return (
//     <div>App
//       {/* 
//       lifecycle - vòng đời của classcomponent
//       function component không có vòng đời.
//       vd: 1 con người sẽ có vòng đời:
//       sinh ra - lớn lên = trưởng thành = lập sự nghiệp = lập gia đình = die

//       class component cũng có vòng đời riêng của nó
//       4 giai đoạn:
//       giai đoạn 1: khởi tạo (initial)
//         + đi khởi tạo props và state
//       giai đoạn 2: mounting (gắn vào UI)
//         + chạy các phương thức sau
//           1. componentWillMount()
//           2. render()
//             không nên setState trong này
//           3. componentDidmount()
//             ==> thực thi 1 lần
//       giai đoạn 3: updating (cập nhật)
//         ==> có thể nhiều lần
//         - khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi
//         thì giai đoạn updating xảy ra
//         ===> cung cấp các phương thức sau
//         1. ShoulComponentUpdate()
//         2.componentWillUpdate()
//         3.render()
//         4.componentDidUpdate()
//       giai đoạn 4: unmounting (gỡ bỏ khỏi UI) 
//         ==> có thể nhiều lần
//         cung cấp phương thức
//         compnentWillUnmount: thường dùng để xử lí các vấn đề như clearTimeout
//         đẻ tránh rò rỉ bộ nhớ
//       */}
//       <ClassComponent></ClassComponent>
//       {active ? <A></A>:""}
//       <button onClick={removeComponent}>clickkkk</button>


//       <Bai1></Bai1>
//       <Bai2></Bai2>
//       <Bai3></Bai3>
//       <Bai4></Bai4>
//       <Bai5></Bai5>
//       <Bai6></Bai6>
//     </div>
//   )
// }
interface Props{

}
interface State{
  mes:string;
}
export default class App extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state={
      mes:'interface rendering'
    }
  }
  handleClickChange=()=>{
    this.setState({
      mes:'interface is all rendering '
    })
  }
  render() {
    return (
      <div>
       <Bai1></Bai1>
       <Bai2></Bai2>
       <Bai3></Bai3>
       <Bai4></Bai4>
       <Bai5></Bai5>
       <div>
        <Bai6 mes={this.state.mes}/>
        <button onClick={this.handleClickChange}>Change props</button>
       </div>
      </div>
    )
  }
}
