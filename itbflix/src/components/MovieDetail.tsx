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

const MovieDetail: React.FC<MovieDetailProps> = ({image, title, year, duration, overview, genres, rating, director, cast, country}) => {

    return (
    <>
    <div className="">
    <img   
    src={image} alt={title} className=""
    />
    <h3 className="">{title}</h3>
    <p className="">
    <span className="">{year}</span> &nbsp;·&nbsp; {duration}
    </p>
    <p className="">{overview}</p>
    <p className="">
    <strong>Genres:</strong> {genres.join(', ')}
    </p>
    <p className="">
    <strong>Rating:</strong> {rating}/10
    </p>
    <p className="">
    <strong>Director:</strong> {director}
    </p>
    <p className="">
    <strong>Cast:</strong> {cast.join(', ')}
    </p>
    <p className="">
    <strong>Country:</strong> {country}
    </p>    
    </div>
    </>
    )
}

export default MovieDetail;


