import React from 'react'
import { Navbar, Typography, Button } from '@material-tailwind/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export const StickyNavbar = ({amount=0}) => {
	

  return (
    <>
			<Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold hover:text-purple-700">
            Cinema Central
          </Typography>
          <div className="flex items-center gap-4">
            <Button size="sm" className="flex flex-row gap-2 px-5 bg-purple-600 hover:shadow-none shadow-none hover:bg-purple-700">
              <ShoppingCartIcon className="w-6 h-6"/> 
              <span className="font-bold text-base"> {amount} </span> 
            </Button>
          </div>
        </div>
			</Navbar>
		</>
  )
}
