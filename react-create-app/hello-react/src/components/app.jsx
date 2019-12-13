import React, { Component } from "react";
import Search from "./search";
import Main from "./main";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Main />
      </div>
    );
  }
}

export default App;
