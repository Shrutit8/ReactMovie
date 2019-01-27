import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/ui/Navigation";
import Search from "./components/movieSearch/Search";
import FeaturedPage from "./components/ui/FeaturedPage";
import Home from "./components/ui/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/searchPage" component={Search} />
              <Route exact path="/featuredPage" component={FeaturedPage} />
              <Route component={Error} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
