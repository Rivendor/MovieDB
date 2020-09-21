import React from 'react'
import { useForm } from 'react-hook-form'
import { searchMovies } from './MovieList'

const SearchBar = (props) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = query => searchMovies(query.searchBar.replace(/\s/g, '+'), props.setMovieList)

    return <form className="Movies-searchbar" onSubmit={handleSubmit(onSubmit)}>
        <input type="text"
            placeholder="Busque um filme por nome, ano ou gênero..."
            name="searchBar"
            ref={register}
        />
        </form>
}

export default SearchBar