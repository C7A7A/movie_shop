import React, {useState, useEffect} from 'react'
import { Card, CardBody, CardFooter, CardHeader, Typography, Button } from '@material-tailwind/react'

export const Movie = ({title, category,  production_year, price, poster}) => {
  const [movieTitle, setMovieTitle] = useState(title);
  
  useEffect(() => {
    let maxMovieSize = 20
    if (movieTitle.length > maxMovieSize) {
      setMovieTitle(movieTitle.slice(0, maxMovieSize) + "...")
    }
  }, [movieTitle])
  

  return (
    <Card className="w-[16rem] shadow-lg">
      <a href="#" className="hover:opacity-80">
        <CardHeader floated={false} className="flex justify-center bg-gray-200">
          <img src={`images/${poster}.jpg`} alt={movieTitle} className="w-[150px] h-[220px]" />
        </CardHeader>
      </a>

      <CardBody className="p-6 py-3">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold text-base">
              {movieTitle}
          </Typography>
        </div>

        <div className="flex flex-col text-gray">
            <div className="flex flex-row">
              <Typography className="text-black w-2/3"> Kategoria: </Typography>
              <Typography> {category} </Typography>
            </div>

            <div className="flex flex-row">
              <Typography className="text-black w-2/3"> Rok produkcji: </Typography>
              <Typography> {production_year} </Typography>
            </div>

            <div className="flex flex-row">
              <Typography className="text-black w-2/3"> Cena: </Typography>
              <Typography> {price} PLN </Typography>
            </div>
        </div>

      </CardBody>

      <CardFooter className="pt-0">
        <Button size="lg" fullWidth={true} className="bg-purple-700 shadow-none hover:shadow-none hover:bg-purple-800" >
          Dodaj do koszyka
        </Button>
      </CardFooter>
    </Card>
  )
}
