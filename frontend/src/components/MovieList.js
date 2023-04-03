import { Typography } from '@material-tailwind/react'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { CategoryDropdown } from './CategoryDropdown'
import { Movie } from './Movie'

export const MovieList = () => {
  const [displayMovies, handleMovies, addMovieToCart] = useOutletContext()

  const listMovies = displayMovies.map((movie, index) => {
    return <Movie key={index}
            movie = {movie}
            addMovieToCart = {addMovieToCart}
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
