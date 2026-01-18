import { useState } from 'react';
import './App.css';

function App() {
  const [menuObert, setMenuObert] = useState(false);

  return (
    <div className="app-container">
      <button
        className="boto-hamburguesa"
        onClick={() => setMenuObert(!menuObert)}
        aria-label="Obrir menú"
        aria-expanded={menuObert}
      >
        ☰
      </button>

      <aside className={`sidebar ${menuObert ? 'activa' : ''}`}>
        <h3>El Meu Menú</h3>
        <nav>
          <ul>
            <li>Inici</li>
            <li>Perfil</li>
            <li>Configuració</li>
            <li>Sortir</li>
          </ul>
        </nav>
      </aside>

      <main className="contingut">
        <h1>Benvinguts a la Web Responsiva</h1>
        <p>
          Si fas la finestra del navegador més petita (menys de 768px),
          la barra lateral desapareixerà i apareixerà un botó d’hamburguesa.
        </p>
        <p>Prova-ho ara redimensionant la finestra!</p>
      </main>
    </div>
  );
}

export default App;
