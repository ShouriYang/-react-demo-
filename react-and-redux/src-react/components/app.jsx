import React, { Component } from 'react';
class App extends Component {
  state = {
    count: 0,
    selectValue: 0
  };
  increment = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.得到原本的count状态并更新
    const count = this.state.count;
    //3.更新状态
    this.setState({ count: count + number });
  };
  decrement = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.得到原本的count状态并更新
    const count = this.state.count;
    //3.更新状态
    this.setState({ count: count - number });
  };
  incrementIfOdd = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.得到原本的count状态
    const count = this.state.count;
    //3.满足调教才更新状态
    if (count % 2 === 1) {
      this.setState({ count: count + number });
    }
  };
  incrementAsync = () => {
    //1.得到选择增加数量
    const number = this.state.selectValue * 1;
    //2.得到原本的count状态
    const count = this.state.count;
    //启动定时器
    setTimeout(() => {
      //3.更新状态
      this.setState({ count: count + number });
    }, 1000);
  };
  handleSelect = event => {
    const selectValue = event.target.value;
    this.setState({ selectValue });
  };
  render() {
    const { count } = this.state;
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

export default App;
