import React, {Component} from 'react';
import Modal from './components/modal'
class App extends Component {
  
  constructor(props) {
    super(props);
    // Step4：父组件所对应的不同状态
    this.state = {
      color1: '',
      color2: '',
      color3: ''
    };
  }
  
  // Step5：父组件对应执行不同的函数
  changeFirstH2 = () => {
    console.log('changeFirstH2')
    this.setState({
      color1: 'red'
    })
  }
  
  // Step5：父组件对应执行不同的函数
  changeTwoH2 = () => {
    console.log('changeTwoH2')
    this.setState({
      color2: 'green'
    })
  }
  
  changeSiblingStyle = (color) => {
    // 改变color3
    this.setState({
      color3: color
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <h2 style={{color: this.state.color1}}>第一次使用modal</h2>
        {/*Step3：父组件的自定义函数（订阅、发布模式）*/}
        <Modal title="测试第一个" clickOk={this.changeFirstH2}/>
        <hr />
        <hr />
        <hr />
        <h2 style={{color: this.state.color2}}>第二次使用modal</h2>
        {/*Step3：父组件的自定义函数（订阅、发布模式）*/}
        <Modal
          title="测试第二个"
          clickOk={this.changeTwoH2}
          clickCancel={this.changeSiblingStyle}
        />
      </div>
    );
  }
}

export default App;
