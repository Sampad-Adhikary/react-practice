import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decreament = ()=>{
    this.setState((prevState)=>({count: prevState.count -1}));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment Count</button>
        <button onClick={this.decreament}>Decreament Count</button>
      </div>
    );
  }
}

export default MyComponent;
