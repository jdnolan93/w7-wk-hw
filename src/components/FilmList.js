import React from "react";

const FilmList = ({film, onFilmSelect}) => {

    const handleFilmSelect = (index) => {
        const selectedFilm = film[index]
        onFilmSelect(selectedFilm)
    }

    const filmNodes = film.map((film, index) => {
        return <li onClick={() => handleFilmSelect(index)} key={index}><img src={film.image} width="100px"></img></li>
    })
    
    return(
    <div>
        {filmNodes}
    </div>)
}

export default FilmList;