import React, { Component } from "react";
import Request from "../../services/request";
import MovieFeature from "./MovieFeature";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_List: []
    };
  }
  componentDidMount() {
    Request(this.props.query)
      .then(res => {
        this.setState({ movie_List: res.data });
      })
      .catch(err => console.log("error"));
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <MovieFeature movieData={this.state.movie_List} />
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
