import React, { Component } from "react";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";
import Modal from "./Modal";
import WithLoading from "./Loader";
import "./MovieApp.css";

const clover = {
  title: "Black Clover",
  saison: 1,
  image:
    "https://www.itl.cat/pngfile/big/16-166197_blackclover-black-clover-asta-demon.jpg",
  rating: 5
};
const dbs = {
  title: "Dragon Ball Super",
  saison: 1,
  image:
    "https://fusion.molotov.tv/arts/m2/446x588/Ch8SHQoUgJ1Sc90hpZMZDdvVL8pjQuYSKLMSA2pwZxgBCh8IARIbChRrINzbDJllQ-UK_pJH6d1eyZHqPRIDcG5n/jpg",
  rating: 4
};
const sds = {
  title: "The Seven Deadly Sins",
  saison: 4,
  image: "https://miro.medium.com/max/3012/1*nLjuBFZnmkQ1vIGar2f1vg.jpeg",
  rating: 3
};
const rosh = {
  title: "Rising Of Shield Hero",
  saison: 1,
  image: "https://images-eu.ssl-images-amazon.com/images/I/61JYuIGkT1L.jpg",
  rating: 4
};

const dn = {
  title: "Death Note",
  saison: 2,
  image:
    "https://img-4.linternaute.com/wcNH3o0nlUYI0OjbdAeQcVNP-AQ=/1240x/0ab06eaeae924e3a8a1b567974d55529/ccmcms-linternaute/39620.jpg",
  rating: 4
};
const mha = {
  title: "My Hero Academeya",
  saison: 4,
  image:
    "https://www.nautiljon.com/images/anime/00/00/boku_no_hero_academia_the_movie_-_heroes_rising_8600.jpg",
  rating: 4
};
const naruto = {
  title: "Naruto Shippuden",
  saison: 1,
  image:
    "https://media.senscritique.com/media/000018306626/source_big/Naruto_Shippuden_Kai.jpg",
  rating: 3
};

const animesToDisplay = [dbs, clover, sds, rosh, mha, dn, naruto];

const MovieListwithLoading = WithLoading(MovieList);
class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: "",
      rating: 0,
      movies: moviesToDisplay,
      loading: false
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  onChangeName = e => {
    this.setState({ titleFilter: e.target.value });
  };

  addMovie = newMovie =>
    this.setState({ movies: [...this.state.movies, newMovie] });
  componentDidMount() {
    this.setState({ loading: true });

    //Function delay 4 sec to load the movielist

    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }
  render() {
    const { rating } = this.state;
    const { title } = this.state;
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter value={title} onChange={this.onChangeName} />
          <RatingFilter value={rating} onStarClick={this.onStarClick} />
        </header>
        <main className="movie-app-main">
          <MovieListwithLoading
            movie={this.state.movies}
            titleFilter={this.state.titleFilter}
            rating={this.state.rating}
            isLoading={this.state.loading}
          />
          <Modal handelSubmit={this.handelSubmit} addMovie={this.addMovie} />
        </main>
      </div>
    );
  }
}

export default MovieApp;
