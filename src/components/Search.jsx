import logo from '../assets/omdb-logo.png';
import noResults from "../assets/search-img.jpg"
import '../App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MediaHTML from './MediaHTML';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SkeletonHTML from './SkeletonHTML';
import { useLocation } from 'react-router-dom';


function Search() {
  const location = useLocation()
  const data = location.state?.searchString

  const [searchString, setSearchString] = useState(data || "")
  const [mediaTypeFilter, setMediaTypeFilter] = useState("")
  const [media, setMedia] = useState([])
  const [yearFilter, setYearFilter] = useState("")
  const [loading, setLoading] = useState(false)


  function handleMediaTypeChange(string) {
    if (string === 'all') setMediaTypeFilter("")

    else if (string === 'movie') setMediaTypeFilter("&type=movie")
    else if (string === 'series') setMediaTypeFilter("&type=series")
    else if (string === 'episode') setMediaTypeFilter("&type=episode")
  }


  async function searchMedia() {
    setLoading(true)
    const response = await axios.get(`https://www.omdbapi.com/?apikey=725681c5&s=${searchString}${mediaTypeFilter}`)
    const filteredMedia = filterMedia(response)
    let data
    
    

    response.data.Search ? yearFilter === "" ? data = response.data.Search.slice(0,6) : data = filteredMedia.slice(0,6) : data = undefined
    
    setMedia(data)
    setLoading(false)
  }

  function filterMedia(response){
    if(response.data.Search && yearFilter) 
      return response.data.Search.filter((item) => {

    return item.Year.slice(0,4) >= yearFilter
  })
  }

  useEffect(() => {
    searchMedia()
  }, [searchString, mediaTypeFilter, yearFilter])


  return (
    <>

      <section id="navAndSearch">
        <nav>
          <figure className="nav__img--wrapper">
            <img className="nav__img" src={logo} alt="" />
          </figure>
          <div className="nav__links">
            <a className="nav__link" href="/">Home</a>
            <a className="nav__link" href="/search">Find Your Movie</a>
            <a className="nav__link" href="/">Contact</a>
          </div>
          <button className="nav__button--wrapper" onClick={() => console.log("Open Menu")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="nav__button" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
        <div className="burger__menu">
          <ul className="burger__menu--list">
            <li onClick={() => console.log("Close Menu")} className="burger__list--item"><a className="burger__list--text" href="/">Home</a></li>
            <li onClick={() => console.log("Close Menu")} className="burger__list--item"><a className="burger__list--text" href="/">Find Your Movie</a></li>
            <li onClick={() => console.log("Close Menu")} className="burger__list--item"><a className="burger__list--text" href="/">Contact</a></li>
          </ul>
          <button className="burger__button" onClick={() => console.log("Close Menu")}>
            <i className="fa-solid fa-x fa-2x"></i>
          </button>
        </div>
        <div className="search--wrapper">
          <h2 className="search__title">Search Our Media</h2>
          <div className="search__bar">
            <input className="search__bar--input" placeholder="Search For Media By Title" onKeyDown={(e) => e.code === 'Enter' && setSearchString(e.target.value)} onBlur={(e) => setSearchString(e.target.value)}
              type="text"></input>
            <div className="search__bar--img" src="" alt="">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="container">
          <div className="row">
            <div className="filters">
              <div className="filters__media-type filter__container">
                <h2 className="filter__header">Show Media Type</h2>
                <select name="media-filter" id="media-filter" onChange={(e) => handleMediaTypeChange(e.target.value)}>
                  <option value="all">All</option>
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                  <option value="episode">Episode</option>
                </select>
              </div>
              <div className="filters__year filter__container">
                <h2 className="filter__header">Show Media Released After Year</h2>
                <input id="yearFilter" type="number" placeholder="Enter Year" onKeyDown={(e) => e.code === 'Enter' && setYearFilter(e.target.value)} onBlur={(e) => setYearFilter(e.target.value)} />
              </div>
            </div>
            <h3 className="results__header">
              {searchString === "" ? <>Search results:</> : <>Search results for <span className='text-gray'>{searchString}</span>:</>}
            </h3>

            {!loading ? media ? (
              <div className="results__list">
                {media.map((item) => {
                    
                  return <MediaHTML imdbID={item.imdbID} key={item.Title} title={item.Title} poster={item.Poster} type={item.Type} year={item.Year} />
})}
              </div>
            ) : (
              <div className="no-results">
                <figure className="results__img--wrapper">
                  <img className="results__img" src={noResults} alt="" />
                </figure>
                <h2 className="no-results__title">Adjust the Search Criteria to Find Media</h2>
                <p className="no-results__sub-title">Please use the search bar and filters above</p>
              </div>
            ) : 
            <div className="results__list">
              <SkeletonHTML />
              <SkeletonHTML />
              <SkeletonHTML />
              <SkeletonHTML />
              <SkeletonHTML />
              <SkeletonHTML />
            </div>}

          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
