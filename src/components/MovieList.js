import React from 'react'
import axios from 'axios'

export const MapMovies = (props) => {
    return props.movieList.slice(0, 5).map((movie, index) => {
        if (!movie) { return <p>Loading</p> }
        else {
        const date = formatDate(movie)
        const vote = formatVote(movie)

        return <div key={index} className="Movies-card-container">
            <img className="Movies-card-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title} />
            <div className="Movies-card-text-container">
            <div className="Movies-card-percentage-circle">
                <h2 className="Movies-card-percentage">{vote}%</h2>
            </div>
            <div className="Movies-card-header-container">
                <h2 className="Movies-card-header-container-title">{movie.title}</h2>
            </div>
            <p className="Movies-card-date">{date}</p>
            {
                !movie.overview
                ? <p className="Movies-card-overview">Sem sinopse.</p>
                : <p className="Movies-card-overview">{movie.overview}</p>
            }
            <div className="Movies-card-tag-row">
                { mapMovieGenres(movie, props.genreList) }
            </div>
            </div>
        </div>
        }
    })
}

export async function getPopularList (setMovieList) {
    const moviedb = axios.create({baseURL: 'https://api.themoviedb.org/3/'})
    const apiKey = 'api_key=0e1e1173c64373fe6b05e8aa643359ad'
    const language = 'pt-BR'

    await moviedb.get(`/movie/popular?${apiKey}&language=${language}`)
    .then(res => {
      !res
        ? setMovieList([])
        : setMovieList(res.data.results)
    })
    .catch(e => {
      console.error(e)
    })
}

export async function getGenreList (setGenreList) {
  const moviedb = axios.create({baseURL: 'https://api.themoviedb.org/3/'})
  const apiKey = 'api_key=0e1e1173c64373fe6b05e8aa643359ad'
  const language = 'pt-BR'

  await moviedb.get(`/genre/movie/list?${apiKey}&language=${language}`)
  .then(res => {
    !res 
      ? setGenreList([])
      : setGenreList(res.data.genres)
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

function formatDate (movie) {
  return !movie.release_date
    ? 'Sem data'
    : movie.release_date.substr(8, 2) +
      '/' + movie.release_date.substr(5, 2) +
      '/' + movie.release_date.substr(0, 4)
}

function formatVote (movie) {
  return movie.vote_average.toString().replace('.', '')
}

function mapMovieGenres (movie, genreList) {
  return movie.genre_ids.map((id, index) => {
    const name = getGenreName(id, genreList)
    return <a key={index} className="Movies-card-tag" href="#">{name}</a>
  })
}

export async function searchMovies (query, setMovieList) {
  const moviedb = axios.create({baseURL: 'https://api.themoviedb.org/3/'})
  const apiKey = 'api_key=0e1e1173c64373fe6b05e8aa643359ad'
  const language = 'pt-BR'

  await moviedb.get(`/search/movie?${apiKey}&query=${query}&language=${language}`)
  .then(res => {
    console.log(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}&language=${language}`)
    !res 
      ? setMovieList([])
      : setMovieList(res.data.results)
  })
  .catch(e => {
    console.error(e)
  })
}