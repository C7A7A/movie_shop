import React, {useState, useEffect} from 'react'
import { Card, CardBody, CardFooter, CardHeader, Typography, Button } from '@material-tailwind/react'
import { MovieDetails } from './MovieDetails';

export const Movie = ({addMovieToCart, movie}) => {
  const [movieTitle, setMovieTitle] = useState(movie.title);
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  
  useEffect(() => {
    let maxMovieSize = 20
    if (movieTitle.length > maxMovieSize) {
      setMovieTitle(movieTitle.slice(0, maxMovieSize) + "...")
    }
  }, [movieTitle])
  
  // console.log(poster)

  return (
    <>
      <Card className="w-[16rem] shadow-lg">
        <div className="hover:opacity-80 cursor-pointer" onClick={handleOpen}>
          <CardHeader floated={false} className="flex justify-center bg-gray-200">
            <img src={`images/${movie.posterName}.jpg`} alt={movieTitle} className="w-[150px] h-[220px]" />
          </CardHeader>
        </div>

        <CardBody className="p-6 py-3">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold text-base">
                {movieTitle}
            </Typography>
          </div>

          <div className="flex flex-col text-gray">
              <div className="flex flex-row">
                <Typography className="text-black w-2/3"> Kategoria: </Typography>
                <Typography> {movie.category} </Typography>
              </div>

              <div className="flex flex-row">
                <Typography className="text-black w-2/3"> Rok produkcji: </Typography>
                <Typography> {movie.productionYear} </Typography>
              </div>

              <div className="flex flex-row">
                <Typography className="text-black w-2/3"> Cena: </Typography>
                <Typography> {movie.price} PLN </Typography>
              </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button onClick={() => addMovieToCart(movie)} size="lg" fullWidth={true} className="bg-purple-700 shadow-none hover:shadow-none hover:bg-purple-800"  >
            Dodaj do koszyka
          </Button>
        </CardFooter>
      </Card>

      <MovieDetails 
        open={open}
        handleOpen={handleOpen}
        movie = {movie}
      />
    </>
   
  )
}
