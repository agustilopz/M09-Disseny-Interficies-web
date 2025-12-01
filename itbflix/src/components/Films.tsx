import '../App.css';
import MovieCard from '../components/MovieCard';

import { useState } from 'react';

import MovieDetail from './MovieDetail';


import { moviesData} from "../moviesData";

const Films: React.FC = () => {

const [selectedMovie, setSelectedMovie] = useState<any>(null);


  return (
    <>

    <h4 className="block pt-8 pl-10 font-medium text-2xl text-left"><span className="hover:text-gray-400 inline-block cursor-pointer">Top Rated Movies</span></h4>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-8">
    
    {moviesData.map((movie)=> {
      return(
      <MovieCard
      key={movie.id}
      image={movie.poster_path}
      title={movie.original_title}
      year={movie.year}
      duration={movie.runtime}
      onClick={() => setSelectedMovie(movie)}
      />
      )
    })}
    </div>

          {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    

    </>
  )
}

export default Films;
