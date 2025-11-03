import './App.css';
import MovieCard from './MovieCard';
import Header from './Header';
import Footer from './Footer';
import { moviesData} from "./moviesData";

function App() {

  return (
    <>
    <Header
      title="ITBFlix"
      searchPlaceholder="Search Movies & TV"
      navItems={["Films", "Discover", "Coming Soon", "Lists"]}
    />
    <h4 className="block pt-8 pl-10 font-medium text-2xl text-left"><span className="hover:text-gray-400 inline-block cursor-pointer">Top Rated Movies</span></h4>
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

    <Footer />
    </>
  )
}

export default App
