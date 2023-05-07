import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === "admin" && password === "admin") {
      this.setState({
        isLoggedIn: true
      });
    }
  };

  render() {
    const { username, password, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <h1>Welcome to your page</h1>;
    } else {
      return (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="enter name"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="enter password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
