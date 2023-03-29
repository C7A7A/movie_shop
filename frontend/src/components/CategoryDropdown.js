import React from 'react'
import { Select, Option } from "@material-tailwind/react"

export const CategoryDropdown = () => {

  return (
    <div className="w-72">
      <Select color="teal" label="Select category">
        <Option> Category 1 </Option>
        <Option> Category 2 </Option>
        <Option> Category 3 </Option>
        <Option> Category 4 </Option>
        <Option> Category 5 </Option>
        <Option> Category 6 </Option>
      </Select>
    </div>
  )
}
