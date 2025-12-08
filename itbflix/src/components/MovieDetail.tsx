import React from 'react';
import '../App.css';

import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';
import { useParams } from "react-router-dom";

interface CastMember {
  name: string;
  role: string;
}

export interface Movie {
  id: string;               // string en el teu dataset
  original_title: string;
  spanish_title?: string;
  year: number;
  poster_path: string;
  runtime: string;
  overview: string;
  genres: string[];
  rating: number;
  director: string;
  cast: CastMember[];
  country?: string;
  watchedAt?: string | null;
  isWatched?: boolean;
  isOnWatchlist?: boolean;
  userRating?: number | null;
  isLogged?: boolean;
  trailer?: string;
  bso?: string;
}

interface MovieDetailProps {
  movies: Movie[];
}


const MovieDetail: React.FC<MovieDetailProps> = ({movies}) => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === (id));

if (!movie) {
  return <div className="text-white">Movie not found</div>;
}
  return (
    <main className="main-movie-details min-h-screen bg-[#12192B] bg-cover bg-center text-white" style={{backgroundImage: `url('/assets/images/TheGodfatherBackdropGrade.png')`}}>
      <section className="movie-details bg-[#12192bcc] p-8 rounded-lg max-w-5xl mx-auto mt-8 shadow-lg">

        <article className="main-header flex flex-col md:flex-row gap-8">
          <div className="poster flex-shrink-0">
            <img src={movie.poster_path} alt={movie.original_title} className="detallposter w-64 h-auto rounded-lg shadow-md" />
          </div>
          <div className="details flex-1">
            <div className="detail-text mb-4">
              <h1 className="text-3xl font-bold mb-1">{movie.original_title} <span className="text-xl font-normal">({movie.year})</span></h1>
              <p className="italic text-lg mb-2">{movie.runtime} · {movie.genres.join(', ')}</p>
              <p className="mb-2"><strong>Directed by</strong> {movie.director}</p>
              <div className="country flex items-center gap-2 mb-2">
                {/* Example flag, replace with dynamic if available */}
                <img src="src/assets/images/usa.png" alt="Country flag" className="w-6 h-4 inline-block" />
                <span>{movie.country}</span>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-1">Overview</h4>
            <p className="mb-4">{movie.overview}</p>
            <div className="aside bg-[#232b45] p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Details</h3>
              <p><b>Genres:</b> {movie.genres.join(', ')}</p>
              <p><b>Rating:</b> {movie.rating}/10</p>
              {/* Add more details as needed, e.g. bso, trailer */}
              
            </div>
          </div>
        </article>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Cast</h3>
          <div className="cast-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movie.cast.map((actor, idx) => (
              <div key={actor.name + actor.role} className="cast-member bg-[#232b45] p-2 rounded-lg text-center">
                <img src={`src/assets/images/cast/${actor.name.toLowerCase().replace(/ /g, "_")}.webp`} alt={actor.name} className="w-20 h-24 object-cover mx-auto rounded" />
                <p className="mt-2 font-semibold">{actor.name}</p>
                <p className="text-xs">{actor.role}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Trailer section if available */}
        {movie.trailer && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Trailer</h3>
            <VideoPlayer 
              videoMp4={movie.trailer}
              videoWebm={movie.trailer}
              fallback="Your browser does not support the video tag."
            />
          </div>
        )}

                      {movie.bso && (<div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Original Soundtrack</h4>
                <AudioPlayer 
                audioMpeg={movie.bso}
                fallback={movie.bso} />
              </div>
              )}
      </section>
    </main>
  );
}

export default MovieDetail;


