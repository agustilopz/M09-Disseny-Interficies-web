import React from 'react';
import './App';


interface MovieCardProps {
  image: string;
  title: string;
  year: number;
}

const MovieCard: React.FC<MovieCardProps> = ({image, title, year}) => {

    return (
    <>
    <div className="movie-card">
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{year}</p>
    </div>
    </>
    )
}

export default MovieCard;