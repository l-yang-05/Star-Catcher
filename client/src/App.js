import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav/Index';
import Footer from './Components/Footer/Index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);


  }
  // componentDidMount() {
  //   this.checkLoginStatus();
  // }
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }
  render() {
    return (
      <React.Fragment>
        <Nav state={this.state} />
        < Footer />
      </React.Fragment >
    );
  }
}

export default App;
