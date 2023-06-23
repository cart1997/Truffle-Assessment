import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./forms/navbar";
import Customers from "./components/customers";
import Register from "./components/register";
import Login from "./components/login";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
