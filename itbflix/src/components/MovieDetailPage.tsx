import { useParams } from 'react-router-dom';
import { moviesData } from '../moviesData';
import MovieDetail from './MovieDetail';

const MovieDetailPage = () => {
  const { id } = useParams();
const movieRaw = moviesData.find(m => m.id === id);

if (!movieRaw) return <div>Movie not found</div>;

const movie = {
  image: movieRaw.poster_path,
  title: movieRaw.original_title,
  year: movieRaw.year,
  duration: movieRaw.runtime,
  overview: movieRaw.overview,
  genres: movieRaw.genres,
  rating: movieRaw.rating,
  director: movieRaw.director,
  cast: movieRaw.cast,
  country: movieRaw.country,
  bso: movieRaw.original_title,
  trailer: movieRaw.original_title,
};

return <MovieDetail movie={movie} onClose={() => window.close()} />;
};

export default MovieDetailPage;