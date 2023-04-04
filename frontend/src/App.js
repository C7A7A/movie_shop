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
  const [cartMovies, setCartMovies] = useState({
    'movies': [],
    'amount': 0
  })

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

  const removeMoviesFromCart = (movie, amount) => {
    const updatedMovies = cartMovies.movies.map(cartMovie => {
      if (cartMovie.title === movie.title) {
        return {
          ...cartMovie,
          amount: cartMovie.amount - amount
        }
      }
      
      return cartMovie
    }).filter(cartMovie => cartMovie.amount > 0) // filter to remove movies that has 0 amount

    setCartMovies({
      movies: updatedMovies,
      amount: cartMovies.amount - amount
    })    
  }

  const addMoviesToCart = (movie, amount) => {
    // Check if movie with the same title already exists in cart
    const movieExists = cartMovies.movies.find((cartMovie => cartMovie.title === movie.title))
   
    // If movie exists -> find it in cart and increment amount
    if (movieExists) {
      const updatedMovies = cartMovies.movies.map(cartMovie => {
        if (cartMovie.title === movie.title) {
          return {
            ...cartMovie,
            amount: cartMovie.amount + amount
          }
        }
        
        return cartMovie
      })

      setCartMovies({
        movies: updatedMovies,
        amount: cartMovies.amount + amount
      })

    } else {
      const movieToAdd = {
        title: movie.title,
        price: movie.price,
        amount: 1
      }
  
      setCartMovies({
        movies: [...cartMovies.movies, movieToAdd],
        amount: cartMovies.amount + 1
      })
    }
  }

  return (
    <div className="container bg-gray-50 mx-auto min-h-screen">
      <StickyNavbar amount={cartMovies.amount} />
      <div className="p-10 h-full">
        <Outlet context={[displayMovies, handleMovies, addMoviesToCart, cartMovies.movies, removeMoviesFromCart]}/>
      </div>
    </div>
  );
}
