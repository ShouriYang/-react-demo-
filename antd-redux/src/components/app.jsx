import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Toast } from 'antd-mobile';
class App extends Component {
  state = {};
  handleClick = () => {
    Toast.info('提交成功');
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          start
        </Button>
      </div>
    );
  }
}

export default App;
