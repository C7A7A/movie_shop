import { Typography } from '@material-tailwind/react'
import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div id="error-page" className="flex flex-col justify-center text-center max-h-96">
      <Typography className="font-extrabold text-6xl m-4"> Oops! </Typography>
      <Typography className="text-2xl m-1"> Sorry, an unexpected error has occured. </Typography>
      <Typography className="text-2xl m-1">
        {error.statusText || error.message}
      </Typography>
    </div>
  )
}
