import React, {useState, useEffect} from 'react';
import './App.css';

// Axios
import axios from 'axios'

async function getPopularList (setMovieList) {
    const moviedb = axios.create({baseURL: 'https://api.themoviedb.org/3/'})
    const apiKey = '?api_key=0e1e1173c64373fe6b05e8aa643359ad'

    // Get popular movies
     await moviedb.get(`/movie/popular${apiKey}&language=pt-BR`)
      .then(res => {

        console.log(res.data.results[0].original_title)

        setMovieList(res.data.results)
      })
      .catch(e => {
        console.error(e)
      })
}

async function getGenreList (setGenreList) {
  const moviedb = axios.create({baseURL: 'https://api.themoviedb.org/3/'})
  const apiKey = '?api_key=0e1e1173c64373fe6b05e8aa643359ad'

  // Get popular movies
   await moviedb.get(`/genre/movie/list${apiKey}&language=pt-BR`)
    .then(res => {

      console.log(res.data.genres)

      setGenreList(res.data.genres)
    })
    .catch(e => {
      console.error(e)
    })
}

function getGenreName (genreId, genreList) {
  const genreName = genreList.map((genre, index) => {
    if (genreId === genre.id) return genre.name
  })
  return genreName
}

function mapMovies (movieList, genreList) {
  return movieList.map((movie, index) => {
    if (!movie) {return <p>Loading</p>}
    else {
      // Date format
      const date = movie.release_date.substr(8, 2) +
      '/' + movie.release_date.substr(5, 2) +
      '/' + movie.release_date.substr(0, 4)

      // Vote format
      const vote = movie.vote_average.toString().replace('.', '')

      return <div key={index} className="Movies-card-container">
        <img className="Movies-card-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title} />
        <div className="Movies-card-text-container">
          <div className="Movies-card-percentage-circle">
            <h2 className="Movies-card-percentage">{vote}%</h2>
          </div>
          <div className="Movies-card-header-container">
          <h2 className="Movies-card-header-container-title">{movie.title}</h2>
          </div>
          <p className="Movies-card-date">{date}</p>
          <p className="Movies-card-overview">{movie.overview}</p>
          <div className="Movies-card-tag-row">
            {
              // Genre names
                movie.genre_ids.map((id, index) => {
                  const name = getGenreName(id, genreList)
                  return <a key={index} className="Movies-card-tag" href="#">{name}</a>
                })
            }
          </div>
        </div>
      </div>
    }
  })
}

function App() {
  const [movieList, setMovieList] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    getPopularList(setMovieList)
    getGenreList(setGenreList)
    return console.log('Unmounted')
  }, [])

  return (
    <div className="flex-container">
      <header className="Movies-header">
        <h1>Movies</h1>
      </header>
      <body>
        <main>
          <div className="Movies-searchbar">
            <input type="text" placeholder="Busque um filme por nome, ano ou gênero..." />
          </div>
          <div className="Movies-card-list">
            {
              mapMovies(movieList, genreList)
            }
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
