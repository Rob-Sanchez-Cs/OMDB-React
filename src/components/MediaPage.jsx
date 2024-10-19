import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/omdb-logo.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MediaPage = () => {
  const { imdbID } = useParams();
  const [mediaData, setMediaData] = useState({});

  async function getMediaInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=725681c5&i=${imdbID}`
    );
    setMediaData(data);
  }

  useEffect(() => {
    getMediaInfo();
  }, []);

  return (
    <>
      {console.log(mediaData)}
      <section id="nav">
        <nav>
          <figure className="nav__img--wrapper">
            <img className="nav__img" src={logo} alt="" />
          </figure>
          <div className="nav__links">
            <a className="nav__link" href="/">
              Home
            </a>
            <a className="nav__link" href="/search">
              Find Your Movie
            </a>
            <a className="nav__link" href="/">
              Contact
            </a>
          </div>
          <button
            className="nav__button--wrapper"
            onClick={() => console.log("Open Menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav__button"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
        <div className="burger__menu">
          <ul className="burger__menu--list">
            <li
              onClick={() => console.log("Close Menu")}
              className="burger__list--item"
            >
              <a className="burger__list--text" href="/">
                Home
              </a>
            </li>
            <li
              onClick={() => console.log("Close Menu")}
              className="burger__list--item"
            >
              <a className="burger__list--text" href="/">
                Find Your Movie
              </a>
            </li>
            <li
              onClick={() => console.log("Close Menu")}
              className="burger__list--item"
            >
              <a className="burger__list--text" href="/">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="burger__button"
            onClick={() => console.log("Close Menu")}
          >
            <i className="fa-solid fa-x fa-2x"></i>
          </button>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <Link to="/search">
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="gray"/>
          </Link>
          <div className="media__row">
            <figure className="media__column">
              <img src={mediaData.Poster} alt="" />
            </figure>
            <div className="media__column">
                {mediaData.Title && <p className="media__data">Title: {mediaData.Title}</p>}
                {mediaData.Actors && <p className="media__data">Actors: {mediaData.Actors}</p>}
                {mediaData.Awards && <p className="media__data">Awards: {mediaData.Awards}</p>}
                {mediaData.Country && <p className="media__data">Country: {mediaData.Country}</p>}
                {mediaData.Director && <p className="media__data">Director: {mediaData.Director}</p>}
                {mediaData.Genre && <p className="media__data">Genre: {mediaData.Genre}</p>}
                {mediaData.Language && <p className="media__data">Language: {mediaData.Language}</p>}
                {mediaData.Metascore && <p className="media__data">Metascore: {mediaData.Metascore}</p>}
                {mediaData.Plot && <p className="media__data">Plot: {mediaData.Plot}</p>}
                {mediaData.Rated && <p className="media__data">Rated: {mediaData.Rated}</p>}
                {mediaData.Ratings && <p className="media__data">Ratings</p>}
                {mediaData.Ratings && mediaData.Ratings.map((rating) => (
                    <p className="">
                      Source: {rating.Source}, Rating: {rating.Value}
                    </p>
                ))}
                {mediaData.Released && <p className="media__data">Released: {mediaData.Released}</p>}
                {mediaData.Runtime && <p className="media__data">Runtime: {mediaData.Runtime}</p>}
                {mediaData.Type && <p className="media__data">Type: {mediaData.Type}</p>}
                {mediaData.Writer && <p className="media__data">Writer: {mediaData.Writer}</p>}
                {mediaData.Year && <p className="media__data">Year: {mediaData.Year}</p>}
                {mediaData.imdbRating && <p className="media__data">imdbRating: {mediaData.imdbRating}</p>}
                {mediaData.imdbVotes && <p className="media__data">imdbVotes: {mediaData.imdbVotes}</p>}
                {mediaData.totalSeasons && <p className="media__data">totalSeasons: {mediaData.totalSeasons}</p>}
                {mediaData.Title && <p className="media__data">Title: {mediaData.Title}</p>}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
