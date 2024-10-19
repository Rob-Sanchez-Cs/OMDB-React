import React from 'react'
import { useParams } from 'react-router-dom'

const MediaPage = () => {

    const {imdbID} = useParams()

  return (
    <div>{imdbID}</div>
  )
}

export default MediaPage