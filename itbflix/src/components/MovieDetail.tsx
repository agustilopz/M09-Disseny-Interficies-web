import React from 'react';
import '../App.css';

interface MovieDetailProps {
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
  bso?: string;
  trailer?: string;
}


const MovieDetail: React.FC<MovieDetailProps> = ({
  image,
  title,
  year,
  duration,
  overview,
  genres,
  rating,
  director,
  cast,
  country,
  bso,
  trailer
}) => {
  return (
    <main className="main-movie-details min-h-screen bg-[#12192B] bg-cover bg-center text-white" style={{backgroundImage: `url('/assets/images/TheGodfatherBackdropGrade.png')`}}>
      <section className="movie-details bg-[#12192bcc] p-8 rounded-lg max-w-5xl mx-auto mt-8 shadow-lg">
        <article className="main-header flex flex-col md:flex-row gap-8">
          <div className="poster flex-shrink-0">
            <img src={image} alt={title} className="detallposter w-64 h-auto rounded-lg shadow-md" />
          </div>
          <div className="details flex-1">
            <div className="detail-text mb-4">
              <h1 className="text-3xl font-bold mb-1">{title} <span className="text-xl font-normal">({year})</span></h1>
              <p className="italic text-lg mb-2">{duration} · {genres.join(', ')}</p>
              <p className="mb-2"><strong>Directed by</strong> {director}</p>
              <div className="country flex items-center gap-2 mb-2">
                {/* Example flag, replace with dynamic if available */}
                <img src="/assets/images/usa.png" alt="Country flag" className="w-6 h-4 inline-block" />
                <span>{country}</span>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-1">Overview</h4>
            <p className="mb-4">{overview}</p>
            <div className="aside bg-[#232b45] p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Details</h3>
              <p><b>Genres:</b> {genres.join(', ')}</p>
              <p><b>Rating:</b> {rating}/10</p>
              {/* Add more details as needed, e.g. bso, trailer */}
            </div>
          </div>
        </article>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Cast</h3>
          <div className="cast-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cast.map((actor, idx) => (
              <div key={idx} className="cast-member bg-[#232b45] p-2 rounded-lg text-center">
                {/* Example image, replace with dynamic if available */}
                <img src={`/assets/images/cast${idx+1}.jpg`} alt={actor} className="w-20 h-24 object-cover mx-auto rounded" />
                <p className="mt-2 font-semibold">{actor}</p>
                {/* <p className="role">Role Name</p> */}
              </div>
            ))}
          </div>
        </div>
        {/* Trailer section if available */}
        {trailer && (
          <div className="mt-8">
            <iframe width="100%" height="320" src={trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        )}
      </section>
    </main>
  );
}

export default MovieDetail;


