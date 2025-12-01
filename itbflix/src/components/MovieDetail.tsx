import React from 'react';
import '../App.css';

import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

interface MovieDetailProps {
  movie: {
    image: string;
    title: string;
    year: number;
    duration: string;
    overview: string;
    genres: string[];
    rating: number;
    director: string;
    cast: string[];
    country: string;
    bso: string;
    trailer: string;
  };
  onClose: () => void;
}


const MovieDetail: React.FC<MovieDetailProps> = ({movie, onClose}) => {
  return (
    <main className="main-movie-details min-h-screen bg-[#12192B] bg-cover bg-center text-white" style={{backgroundImage: `url('/assets/images/TheGodfatherBackdropGrade.png')`}}>
      <section className="movie-details bg-[#12192bcc] p-8 rounded-lg max-w-5xl mx-auto mt-8 shadow-lg">
                <button onClick={onClose} className="mb-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-500">Close</button>

        <article className="main-header flex flex-col md:flex-row gap-8">
          <div className="poster flex-shrink-0">
            <img src={movie.image} alt={movie.title} className="detallposter w-64 h-auto rounded-lg shadow-md" />
          </div>
          <div className="details flex-1">
            <div className="detail-text mb-4">
              <h1 className="text-3xl font-bold mb-1">{movie.title} <span className="text-xl font-normal">({movie.year})</span></h1>
              <p className="italic text-lg mb-2">{movie.duration} · {movie.genres.join(', ')}</p>
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
              <div key={idx} className="cast-member bg-[#232b45] p-2 rounded-lg text-center">
                {/* Example image, replace with dynamic if available */}
                <img src={`src/assets/images/cast/${actor.toLowerCase().replace(/ /g, "_")}.webp`} alt={actor} className="w-20 h-24 object-cover mx-auto rounded" />
                <p className="mt-2 font-semibold">{actor}</p>
                {/* <p className="role">Role Name</p> */}
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
              subtitles={`src/assets/subtitles/${movie.trailer}.vtt`}
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


