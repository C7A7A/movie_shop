import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const CartTable = () => {
  const contextValues = useOutletContext()
  const cartMovies = contextValues[3]
  const addMoviesToCart = contextValues[2]
  const removeMoviesFromCart = contextValues[4]

  console.log(cartMovies)
  
  const handleChange = (actualValue, prevValue, movie) => {
    if (isNaN(actualValue)) return
    if (actualValue < 0) return
    if (actualValue === "") return

    console.log("value: ", actualValue)
    console.log("movie: ", movie)

    const numberDifference = Math.abs(actualValue - prevValue)

    if (actualValue > prevValue) {
      addMoviesToCart(movie, numberDifference)
    } else {
      removeMoviesFromCart(movie, numberDifference)
    }
  }

  var priceSum = 0
  const listMovies = cartMovies.map((movie, index) => {
    let moviePriceSum = movie.price * movie.amount
    priceSum += moviePriceSum

    return  <tr key={index}>
              <td> {movie.title} </td>
              <td> {movie.price} PLN </td>
              <td> <input type="number" min='0' defaultValue={movie.amount} onChange={(e) => handleChange(e.target.value, movie.amount, movie)} className="cursor-default" /> </td>
              <td> {moviePriceSum} PLN </td>
            </tr>

  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <Typography className="font-semibold text-black text-4xl"> Koszyk </Typography>
      <hr />
      <div className="flex flex-col w-4/5 justify-center mx-auto">
        <div className="flex">
          <table className="table table-auto w-full">
            <thead >
              <tr>
                <th className="text-base"> Film </th>
                <th className="text-base"> Cena za sztukę </th>
                <th className="text-base"> Ilość </th>
                <th className="text-base"> Razem </th>
              </tr>
            </thead>

            <tbody>
              {listMovies}

              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> {priceSum} PLN </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <Button className="bg-purple-600 shadow-none hover:shadow-none hover:bg-purple-800 mt-4"> 
            <span className="font-bold text-sm p-5"> Zapłać </span>
          </Button>
        </div>
        
      </div>
    </div>
  )
}
