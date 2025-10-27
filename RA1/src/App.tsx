import { useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import { moviesData} from "./moviesData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
    <>
    <nav style={{ backgroundColor: "#2C3545", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 2rem" }}>
          <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center"

        }}>
          <li> <FontAwesomeIcon className="top-nav-icon" icon={faBars}  style={{
            height: "24px", width: "24px", display: "flex", alignItems: "center", padding: "0.4rem", borderRadius: "8px",
          }} /></li>
          <li style={{ fontSize: "1.4rem", fontWeight: "600" }}>ITBFlix</li>
          <li><div style={{ backgroundColor: "#374151", borderRadius: "15px", padding: "0.3rem 1.5rem", width: "50vh", textAlign: "left" }}>🔎 Search Movies & TV</div></li>
        </ul>
        <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center"
        }}>
          <li><a href="">Films</a></li>
          <li><a href="">Discover</a></li>
          <li><a href="">Coming Soon</a></li>
          <li><a href="">Lists</a></li>
        </ul>
        </nav>

    <div className="movie-grid">
    {moviesData.map((movie)=> {
      return(
      <MovieCard
      image={movie.poster_path}
      title={movie.original_title}
      year={movie.year}
      duration={movie.runtime}
      />
      )
    })}
    </div>
    </>
  )
}

export default App
