import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Recepta from './components/Recepta.jsx'


function App() {

  const [receptes, setReceptes] = useState([]);


  useEffect(() => {
    fetch('/receptes.json')
      .then(response => response.json())
      .then(data => {
        // Process the fetched data
        console.log(data);
        setReceptes(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section>
      <nav>
        <h4>HealthyBites</h4>
        <div>
          <a href="#">Inici</a>
          <a href="#">Sobre</a>
          <a href="#">Contacte</a>
        </div>
      </nav>

      </section>
      <h1>Receptes saludables</h1>
      <h3>Descobreix receptes deliciosesi nutritives per a un estil de vida saludable</h3>
      
      <div className="grid grid-cols-3 gap-8">
      {receptes.map((recepta) => {
        return <Recepta
        key={recepta.id}
        nom={recepta.nom}
        descripcio={recepta.descripcio}
        imatge={recepta.imatge}
        />
      })}
      </div>
      <section>

      </section>

      <section>

      </section>
    </>
  )
}

export default App
