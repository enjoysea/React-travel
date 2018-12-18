import React, { Component } from 'react'
import './modal.css'
export default class Modal extends Component {

  static defaultProps = {
    title: '这里是默认标题'
  }

  clickOk = () => {
    console.log(this.refs)
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
            <div>在这里添加内容

              {
                this.props.children()
              }
            </div>
          </div>
          <div className="modal-footer">
            <input 
              className="btn" 
              type="button" 
              value="确定" 
              onClick={this.clickOk}
            />
            <input className="btn" type="button" value="取消" />
          </div>
        </div>
      </div>
    )
  }
}
