import React from 'react'

export const Movie = ({title, category,  production_year, price}) => {
  return (
    <div className="inline-flex bg-gray-200 justify-center m-auto max-w-[280px]">
      <a href="#" className="group">
        <div className="m-2">
          <div className="overflow-hidden">
            <img 
              src='/images/lsnienie.jpg' alt="lsnienie"
              className="group-hover:opacity-75 object-fill w-[260px] h-[360px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-1 p-1">
            <p className="text-sm text-gray-700 font-bold"> Tytuł </p>
            <p className="text-sm text-gray-700 font-medium overflow-hidden"> {title} </p>

            <p className="text-sm text-gray-700 font-bold"> Kategoria </p>
            <p className="text-sm text-gray-700 font-medium overflow-hidden"> {category} </p>

            <p className="text-sm text-gray-700 font-bold"> Rok produkcji </p>
            <p className="text-sm text-gray-700 font-medium overflow-hidden"> {production_year} </p>

            <p className="text-sm text-gray-700 font-bold"> Cena </p>
            <p className="text-sm text-gray-700 font-medium overflow-hidden"> {price}PLN </p>
          </div>
        </div>
      </a>
    </div>
  )
}
