import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import MovieDetail from '../src/components/MovieDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/*<App />*/}
    <MovieDetail 
      image="https://image.tmdb.org/t/p/w500//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"
      title="The Batman"
      year={2022}
      duration="2h 55m"
      overview="In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler."
      genres={['Action', 'Crime', 'Drama']}
      rating={8.3}
      director="Matt Reeves"
      cast={['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano']}
      country="USA"
    />
    </BrowserRouter>
  </StrictMode>,
)
