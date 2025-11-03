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
    <div className="flex flex-col items-start relative">
    <img   
    src={image} alt={title} 
    className="w-full h-auto rounded-lg border-2 border-transparent hover:border-gray-400 cursor-pointer"
    />
    <h3 className="text-[1.0rem] my-1 text-[#E6EBF3] font-normal font-inter no-underline line-clamp-2 overflow-hidden text-ellipsis">{title}</h3>
    <p className="font-medium text-[0.8rem] text-[#9ca3af] font-inter mb-2">
    <span className="font-normal text-[#E6EBF3]">{year}</span> &nbsp;·&nbsp; {duration}
    </p>
    </div>
    </>
    )
}

export default MovieCard;


