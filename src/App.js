import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerName: "HHHHH"
    }
  }

  changeHeaderName = (name) => {
    this.setState({
      headerName: name
    });
  }

  render() {
    let user = {
      name: "lkw",
      age: 36,
      items: [
        "111",
        "222",
        "333"
      ]
    }
    return (
      <div className="App">
        <Header name={this.state.headerName} />
        <Home name={"1 + 2"} user={user} h={hello} changeHeaderName={this.changeHeaderName}>
          <div>children</div>
        </Home>
      </div>
    );
  }
}

function hello() {
  alert("hello");
}

export default App;
