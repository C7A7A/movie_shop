import { StickyNavbar } from './components/StickyNavbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const moviesUrl = "http://localhost:8080/api/movies"
const headers = { 
  headers: {
    'Access-Control-Allow-Origin': '*'
  } 
}

export const App = () => {
  const [movies, setMovies] = useState([])
  const [displayMovies, setDisplayMovies] = useState([])
  const [cartMovies, setCartMovies] = useState([])

  useEffect(() => {
    axios.get(moviesUrl, headers).then((response) => {
      response.data.map(movie => movie.category = movie.category.charAt(0) + movie.category.substring(1).toLowerCase())
      // console.log(response.data)
      setMovies(response.data)
      setDisplayMovies(response.data)
    })
  }, [])

  const handleMovies = (category) => {
    if (category === "Wszystkie") {
      setDisplayMovies(movies)
    } else if (category !== "") {
      let filteredMovies = movies.filter(movie => movie.category === category)
      // console.log(filteredMovies)
      setDisplayMovies(filteredMovies)
    }
  }

  const addMovieToCart = (movie) => {
    console.log("XDD")
    // const movieToAdd = {
    //   title: movie.title,
    //   price: movie.price,
    //   amount: 1
    // }

    // setCartMovies(cartMovies => [...cartMovies, movieToAdd])
  }

  return (
    <div className="container bg-gray-50 mx-auto min-h-screen">
      <StickyNavbar />
      <div className="p-10 h-full">
        <Outlet context={[displayMovies, handleMovies, addMovieToCart, cartMovies]}/>
      </div>
    </div>
  );
}
