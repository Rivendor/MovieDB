import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import {
  MapMovies,
  getPopularList,
  getGenreList
} from './components/MovieList'

function App() {
  const [movieList, setMovieList] = useState([])
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    getPopularList(setMovieList)
    getGenreList(setGenreList)
    return () => {
      setMovieList([])
      setGenreList([])
    }
  }, [])

  return (
    <div className="flex-container">
      <Header />
      <body>
        <main>
          <SearchBar setMovieList={setMovieList} />
          <div className="Movies-card-list">
            <MapMovies movieList={movieList} genreList={genreList} />
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;