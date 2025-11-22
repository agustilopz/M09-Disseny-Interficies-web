import './App.css'

export function MovieCard({
  poster, title, year, duration
}) {

  return (
    <div 
      className={`movie-wrapper`}
      style={{ 
        display: 'flex', 
        position: 'relative',
      }}
    >
      <article className='movie-card'>
        <div className="image-container">
          <img className='movie-card-img' src={poster}  />
        </div>

        <div>
            <h4 className='movie-card-title'>{title}</h4>
            <p className='movie-card-info'>
              <span className='movie-card-info-year'>{year}</span> &nbsp;·&nbsp; {duration}
            </p>
          </div>

      </article>
    </div>
  )
}