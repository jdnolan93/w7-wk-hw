import React from "react";

const Film = ({film}) => {
    return(
    <div class ="information">
        <img src={film.image} width="100" alt="film poster"/>
        <h2>{film.title}</h2>
        <h3>{film.original_title_romanised}</h3>
        <h4>Director: {film.director} </h4>
        <h4>Producer: {film.producer} </h4>
        <h4>Release Date: {film.release_date} </h4>
        <h4>Length: {film.run_time} </h4>
        <h4>Rotten Tomatoes Score: {film.rt_score} </h4>
        <h4>Film Description:</h4> 
        <p>{film.description}</p> 
    </div>
    )
}

export default Film;