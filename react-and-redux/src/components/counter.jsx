import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
class Counter extends Component {
  state = {
    selectValue: 0
  };
  static propTypes = {
    count : PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }
  increment = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.调用store的方法更新状态
    this.props.increment(number)
  };
  decrement = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.调用store的方法更新状态
    this.props.decrement(number)

  };
  incrementIfOdd = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.得到原本的count状态
    const {count}= this.props;
    //3.满足调教才更新状态
    if (count % 2 === 1) {
      this.props.increment(number)
    }
  };
  incrementAsync = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //启动定时器
    this.props.incrementAsync(number)
    // setTimeout(() => {
    //   //3.更新状态
    //   this.props.increment(number)
    // }, 1000);
  };
  handleSelect = event => {
    const selectValue = event.target.value;
    this.setState({ selectValue });
  };
  render() {
    const {count}= this.props;
    return (
      <div>
        <p> click {count} times</p>
        <div>
          &nbsp;
          <select onChange={this.handleSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    );
  }
}

export default Counter

