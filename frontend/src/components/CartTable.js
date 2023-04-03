import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const CartTable = () => {
  const [cartMovies] = useOutletContext()
  console.log(cartMovies)

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
              <tr>
                <td> Lśnienie </td>
                <td> 25 PLN </td>
                <td> <input type="number" min="0" /></td>
                <td> 50 PLN </td>
              </tr>

              <tr>
                <td> Skazani na Shawshank</td>
                <td> 35 PLN </td>
                <td> <input type="number" min="0" /> </td>
                <td> 35 PLN </td>
              </tr>

              <tr>
                <td> Siedem </td>
                <td> 50 PLN </td>
                <td> <input type="number" min="0" /> </td>
                <td> 500 PLN </td>
              </tr>

              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> 585 PLN </td>
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
