import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies} = useGlobalContext()
  console.log(movies);
  
  return <section>
    {movies.map((movie)=> {
      const {Poster} = movie 
      return <article>
        <img src={Poster} alt=""/>
      </article>
    })}
  </section>
}

export default Movies
