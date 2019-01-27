import React from "react";
import Movie from "../../../components/movieSearch/Movie";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Show result with full plot", () => {
  const prop = JSON.parse('{"Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates","Awards":"Won 11 Oscars. Another 111 wins & 77 nominations.","BoxOffice":"N/A","Country":"USA","DVD":"10 Sep 2012","Director":"James Cameron","Genre":"Drama, Romance","Language":"English, Swedish","Metascore":"75","Plot":"84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Production":"Paramount Pictures","Rated":"PG-13","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"75/100"}],"Released":"19 Dec 1997","Response":"True","Runtime":"194 min","Title":"Titanic","Type":"movie","Website":"http://www.titanicmovie.com/","Writer":"James Cameron","Year":"1997","imdbID":"tt0120338","imdbRating":"7.8","imdbVotes":"926,635"}')
  const wrapper = shallow(<Movie movieData={prop}/> );
  expect(wrapper).toMatchSnapshot()
});

it("Show result with short plot", () => {
  const prop = JSON.parse('{"Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates","Awards":"Won 11 Oscars. Another 111 wins & 77 nominations.","BoxOffice":"N/A","Country":"USA","DVD":"10 Sep 2012","Director":"James Cameron","Genre":"Drama, Romance","Language":"English, Swedish","Metascore":"75","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Production":"Paramount Pictures","Rated":"PG-13","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"75/100"}],"Released":"19 Dec 1997","Response":"True","Runtime":"194 min","Title":"Titanic","Type":"movie","Website":"http://www.titanicmovie.com/","Writer":"James Cameron","Year":"1997","imdbID":"tt0120338","imdbRating":"7.8","imdbVotes":"926,635"}')
  const wrapper = shallow(<Movie movieData={prop}/> );
  expect(wrapper).toMatchSnapshot()
});