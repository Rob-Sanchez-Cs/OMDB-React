import React, { useState } from "react";
import logo from "../assets/omdb-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import popcorn from "../assets/popcorn.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchString, setSearchString] = useState("");

  let navigate = useNavigate()

  return (
    <>
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
        <div className="row home__row">
          <h1 className="home__row--title">America's most rewarded media search platform</h1>
          <h2 className="home__row--sub-title">Find media with OMDB</h2>
          <div className="search--wrapper search__margin">
            <div className="search__bar">
              <input
                className="search__bar--input"
                placeholder="Search For Media By Title"
                onKeyDown={(e) =>
                  e.code === "Enter" && navigate('/search', {state: {searchString: searchString}})
                }
                onChange={(e) => setSearchString(e.target.value)}
                onBlur={(e) => navigate('/search', {state: {searchString: searchString}})}
                type="text"
              ></input>
              <div className="search__bar--img" src="" alt="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <figure className="home__img--wrapper">
                <img className="home__img" src={popcorn} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
