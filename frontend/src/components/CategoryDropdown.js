import React from 'react'

export const CategoryDropdown = ({handleMovies}) => {

  const onChange = (event) => {
    const category = event.target.value
    handleMovies(category.toUpperCase())
  }

  return (
    <div className="flex flex-row justify-start min-w-[30rem] w-5/12 items-center gap-2">
      <label htmlFor="selectMovieCategory" className="w-1/2 font-medium text-xl text-black"> Kategoria filmów: </label>
      <select defaultValue="Wszystkie" id="selectMovieCategory" className="select select-purple w-1/2 max-w-xs" onChange={onChange}  >
          <option value="Wszystkie"> Wszystkie </option>
          <option value="Dramat"> Dramat </option>
          <option value="Horror"> Horror </option>
          <option value="Thriller"> Thriller </option>
          <option value="Komedia"> Komedia </option>
          <option value="Animacja"> Animacja </option>
          <option value="Fantasy"> Fantasy </option>
      </select>
    </div>
  )
}
