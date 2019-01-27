import React, { Component } from "react";
import Feature from "../movieSearch/Feature";
import GotoHome from "./GotoHome";

class FeaturedPage extends Component {
  state = {
    movieTitle: ""
  };
  render() {
    return (
      <div>
        <Feature query={"titanic"} />
        <Feature query={`batman`} />
        <GotoHome />
      </div>
    );
  }
}
export default FeaturedPage;
