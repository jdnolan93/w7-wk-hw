import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import Film from '../components/Film';

const FilmContainer = () => {
    
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => response.json())
        .then((films) => setFilms(films))
    }

    useEffect(() => {
        getFilms();
    }, [])

    const handleFilmSelect = (film) => {
        setSelectedFilm(film)
    }

   return(
        <div>
            <h2>Choose Film:</h2>
            <FilmList films={films} onFilmSelect={handleFilmSelect}/>
            <h2>Film Details:</h2>
            <Film film={selectedFilm}/>

        </div>
   )
};

export default FilmContainer;