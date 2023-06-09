import { Dialog, DialogHeader, DialogBody, Typography } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const MovieDetails = ({open, handleOpen, movie}) => {
  return (
    <>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex flex-row w-full">
            <div className="flex w-4/5">
              <span className="my-auto"> Szczegóły filmu </span>
            </div>
            <div className="flex w-full justify-end">
              <button onClick={handleOpen} className="rounded-md p-2 inline-flex items-center justify-center text-white bg-purple-600 hover:bg-purple-800">
                <XMarkIcon className="h-6 w-6"/>
              </button>
            </div>
          </div>
          
        </DialogHeader>

        <DialogBody divider>
          <div className='flex flex-row gap-2'>
            <div className='w-2/5 '>
              <img src={`images/${movie.posterName}.jpg`} alt={movie.title} />
            </div>

            <div className="w-3/5 flex flex-col text-gray px-10">
              <div className="flex flex-col">
                <Typography className="text-black font-bold text-2xl mb-2"> {movie.title} </Typography>
                <Typography className="text-lg"> {movie.description} </Typography>
              </div>

              <div className="mt-10">
                <div className="flex flex-row mb-2">
                  <Typography className="text-black font-bold text-lg w-1/3"> Kategoria: </Typography>
                  <Typography className="text-lg"> {movie.category} </Typography>
                </div>

                <div className="flex flex-row mb-2">
                  <Typography className="text-black font-bold text-lg w-1/3"> Rok produkcji: </Typography>
                  <Typography className="text-lg"> {movie.productionYear}</Typography>
                </div>

                <div className="flex flex-row mb-2">
                  <Typography className="text-black font-bold text-lg w-1/3"> Cena: </Typography>
                  <Typography className="text-lg"> {movie.price} PLN </Typography>
                </div>
              </div>
              
            </div>
          </div>
          
        </DialogBody>
      </Dialog>
    </>
  )
}
