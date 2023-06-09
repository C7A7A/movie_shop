import React from 'react'
import { Navbar, Typography, Button } from '@material-tailwind/react'
import { ShoppingCartIcon, FilmIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export const StickyNavbar = ({amount=0}) => {
	

  return (
    <>
			<Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-white">
        <div className="flex items-center justify-between text-blue-gray-900">

          <Link to={'/'}>
            <Typography className="flex flex-row font-bold text-xl gap-2 mr-4 cursor-pointer py-1.5 hover:text-purple-700">
              <FilmIcon className="w-7 h-7" /> 
              Cinema Central
            </Typography>
          </Link>
            
          <div className="flex items-center gap-4">
            <Link to={'/cart'}>
              <Button size="sm" className="flex flex-row gap-2 px-5 bg-purple-600 hover:shadow-none shadow-none hover:bg-purple-700">
                <ShoppingCartIcon className="w-6 h-6"/> 
                <span className="font-bold text-base"> {amount} </span> 
              </Button>
            </Link>

          </div>
        </div>
			</Navbar>
		</>
  )
}
