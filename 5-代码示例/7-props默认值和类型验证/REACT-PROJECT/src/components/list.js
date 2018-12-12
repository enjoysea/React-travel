import React from 'react'
import PropTypes from 'prop-types' // 很多验证的类型

/* function add(a, b) {
  if(typeof a === 'number')
  return a + b
} */

class List extends React.Component {
  
  // 方法二：props默认值写在类中
  static defaultProps = {
    title: '默认值写在类中',
    list: []
  }
  
  render() {
    let {title, list} = this.props
    return (
      <React.Fragment>
        <h2>
          <span>{title}</span>
        </h2>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

// 方法一：类的静态属性
/* List.defaultProps = {
  title: '默认值'
} */

List.propTypes = {
  tilte: PropTypes.string,
  list: PropTypes.array
}
console.dir(List)

export default List;
