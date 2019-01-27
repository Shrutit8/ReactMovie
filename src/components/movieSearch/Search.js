import React, { Component } from "react";
import Movie from "./Movie";
import Request from "../../services/request";
import GotoHome from "../ui/GotoHome";

class Search extends Component {
  state = {
    query: "",
    movieList: [],
    showComponent: false,
    plot: "full"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };

  shortPlot = e => {
    this.setState({ plot: e.target.value });
  };

  searchMovie = e => {
    e.preventDefault();
    Request(this.state.query, this.state.plot)
      .then(res => {
        this.setState({ movieList: res.data });
        if (this.state.query !== "") {
          this.setState({ showComponent: true });
        } else {
          this.setState({ showComponent: false });
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="card card-body mb-4 p-4 border-0">
          <h2 className="display-4 text-center ">Search Your Movie</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Movie Search..."
                name="query"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="full"
                  name="plot"
                  onChange={this.shortPlot}
                  checked
                />
                Full Plot
              </label>
              <label>
                <input
                  type="radio"
                  value="short"
                  name="plot"
                  onChange={this.shortPlot}
                />
                Short Plot
              </label>
            </div>

            <button
              className="btn btn-primary btn-lg btn-block mb-5 "
              type="submit"
              onClick={this.searchMovie}
            >
              Search Movie
            </button>

            {this.state.showComponent ? (
              <Movie movieData={this.state.movieList} />
            ) : null}
          </form>
        </div>
        <GotoHome to="/" />
      </div>
    );
  }
}

export default Search;
