import React, {Component} from 'react'
import './modal.css'
export default class Modal extends Component {
  
  static defaultProps = {
    title: '这里是默认标题'
  }
  // Step2：子组件所绑定的事件
  clickOk = () => {
    // 不能做具体的事情，交给外界去使用
    if (typeof this.props.clickOk === 'function') {
      this.props.clickOk();
    }
  }
  // 点击取消按钮改变另一个组件Sibling的样式步骤Step2：子组件所绑定的事件
  clickCancel = () => {
    if (typeof this.props.clickCancel === 'function') {
      this.props.clickCancel('blue') // 执行父组件的函数，key值是clickCancel
    }
  }
  
  render() {
    let {title} = this.props;
    return (
      <div className="modal-example">
        <div className="modal">
          <div className="modal-header">
            <h4>{title}</h4>
          </div>
          <div className="modal-content">
            <div>
              在这里添加内容
            </div>
          </div>
          <div className="modal-footer">
            {/*Step1：子组件绑定onClick事件*/}
            <input
              className="btn"
              type="button"
              value="确定"
              onClick={this.clickOk}
            />
            {/*点击取消按钮改变另一个组件Sibling的样式步骤Step1：子组件绑定onClick事件*/}
            <input
              className="btn" type="button" value="取消"
              onClick={this.clickCancel}
            />
          </div>
        </div>
      </div>
    )
  }
}
