import React from 'react'
import { Select, Option } from "@material-tailwind/react"

export const CategoryDropdown = () => {

  return (
    <div className="flex flex-row justify-start min-w-[30rem] w-5/12 items-center gap-2">
      <label htmlFor="selectMovieCategory" className="w-1/2 font-medium text-xl text-black"> Kategoria filmów: </label>
      <Select id="selectMovieCategory" size="lg" color="purple" className="text-base">
          <Option selected> Wszystkie </Option>
          <Option> Dramat </Option>
          <Option> Horror </Option>
          <Option> Thriller </Option>
          <Option> Komedia </Option>
          <Option> Animacja </Option>
          <Option> Fantasy </Option>
      </Select>
    </div>
  )
}
