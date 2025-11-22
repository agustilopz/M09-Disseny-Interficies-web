import "./App.css";
import { MovieCard } from "./MovieCard";
import { moviesData } from "./movies_data.js";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function App() {

  return (
    <div className="app-container">

      <section style={{ backgroundColor: "#2C3545", height: "3.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem" }}>
        <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center"

        }}>
          <li> <FontAwesomeIcon className="top-nav-icon" icon={faBars} style={{
            height: "24px", width: "24px", display: "flex", alignItems: "center", padding: "0.4rem", borderRadius: "8px",

          }} /></li>
          <li style={{ fontSize: "1.4rem", fontWeight: "600" }}>Filmix</li>
          <li><div style={{ backgroundColor: "#374151", borderRadius: "15px", padding: "0.3rem 1.5rem" }}>🔎 Search Movies & TV</div></li>
        </ul>
        <ul style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          gap: "2rem",
          alignItems: "center"

        }}>
          <li>Films</li>
          <li>Discover</li>
          <li>Groups</li>
        </ul>
      </section>

      <div style={{ display: "flex", minHeight: "100vh" }}>

        {/* Main movie grid */}
        <main className="main-content">
          <div className={`grid-view grid-size-m`}>
          {moviesData.map((movie) => (
                      
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              year={movie.year}
              duration={movie.runtime}
            />
          ))}
          </div>
        </main>

      </div>

    </div>
  );
}