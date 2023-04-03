import { Typography } from '@material-tailwind/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CategoryDropdown } from './CategoryDropdown'
import { Movie } from './Movie'

const moviesUrl = "http://localhost:8080/api/movies"
const headers = { 
  headers: {
    'Access-Control-Allow-Origin': '*'
  } 
}

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [displayMovies, setDisplayMovies] = useState([])

  useEffect(() => {
    axios.get(moviesUrl, headers).then((response) => {
      setMovies(response.data)
      setDisplayMovies(response.data)
    })
  }, [])
  
  const handleMovies = (category) => {
    if (category === "WSZYSTKIE") {
      setDisplayMovies(movies)
    } else if (category !== "") {
      let filteredMovies = movies.filter(movie => movie.category === category)
      // console.log(filteredMovies)
      setDisplayMovies(filteredMovies)
    }
  }

  // console.log(movies)

  const listMovies = displayMovies.map((movie, index) => {
    return <Movie key={index}
            title = {movie.title}
            category = {movie.category.charAt(0) + movie.category.substring(1).toLowerCase()}
            production_year = {movie.productionYear}
            price = {movie.price}
            poster = {movie.posterName}
            description = {movie.description}
          />
  })

  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full">
        <Typography className="font-semibold text-black text-4xl"> Filmy </Typography>
        <hr />
        <CategoryDropdown handleMovies={handleMovies} />
        <div className="grid grid-cols-4 gap-4">
          {listMovies}
        </div>
      </div>
    </>
  )
}
