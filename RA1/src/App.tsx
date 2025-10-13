import { useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';


import { moviesData} from "./moviesData";


    moviesData.map((movie)=> {
      console.log(movie.original_title)
    })

function App() {

  return (
    <>
    <div className="movie-grid">
    {moviesData.map((movie)=> {
      return(
      <MovieCard
      image={movie.poster_path}
      title={movie.original_title}
      year={movie.year}
      />
      )
    })}
    </div>

    </>
  )
  
}

export default App
