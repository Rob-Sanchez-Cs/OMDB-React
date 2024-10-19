import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaHTML = ({title, poster, type, year, imdbID}) => {

    let navigate = useNavigate()

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="media" onClick={() => navigate(`/${imdbID}`)}>
                <figure className="media__poster--wrapper">
                    <img className="media__poster" src={poster} alt="" />
                </figure>
                <h2 className="media__title">{title}</h2>
                <p className="media__type">Media Type: {capitalize(type)}</p>
                <p className="media__year">Released: {year}</p>
            </div>
    );
}

export default MediaHTML;
