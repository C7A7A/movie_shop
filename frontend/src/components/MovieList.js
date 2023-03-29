import { Typography } from '@material-tailwind/react'
import React from 'react'
import { CategoryDropdown } from './CategoryDropdown'
import { Movie } from './Movie'

export const MovieList = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <Typography className="font-semibold text-4xl"> Filmy </Typography>
        <hr />
        <CategoryDropdown />
        <div className="flex flex-row gap-10">
          <Movie 
            title = "Lot nad Kukułczym Gniazdem"
            category = "Dramat"
            production_year = "1995"
            price = "35"
            poster = "lot_nad_kukulczym_gniazdem"
          />
          <Movie 
            title = "Siedem"
            category = "Thriller"
            production_year = "1999"
            price = "40"
            poster = "siedem"
          />
          <Movie 
            title = "Lśnienie"
            category = "Horror"
            production_year = "2001"
            price = "25"
            poster = "lsnienie"
          />
        </div>
        
      </div>
    </>
  )
}
