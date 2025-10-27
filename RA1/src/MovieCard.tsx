import React from 'react';
import './App';

interface MovieCardProps {
  image: string;
  title: string;
  year: number;
  duration: string;
}

const MovieCard: React.FC<MovieCardProps> = ({image, title, year, duration}) => {

    return (
    <>
    <div className="movie-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p className='movie-card-info'>
    <span className='movie-card-info-year'>{year}</span> &nbsp;·&nbsp; {duration}
    </p>
    </div>
    </>
    )
}

export default MovieCard;