import { useRef, useEffect } from 'react';
import './App.css';

// Si ja teniu algun formulari, feu que un input tingui focus automàtic quan la pàgina es carrega.
function App() {
  const nomUsuariRef = useRef(null); // Crea la variable per guardar la referència.

  // Un cop l'HTML s'ha pintat al navegador, executa .focus() immediatament. Els corxets buits [] asseguren que només s'executi una vegada al principi
  useEffect(() => {
    if (nomUsuariRef.current) {
      nomUsuariRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>Formulari d'Accés</h2>

      <form>
        <label>Nom d'usuari:</label>
        <input
          ref={nomUsuariRef} // Connecta la variable a l'etiqueta HTML <input>.
          type="text"
          placeholder="El teu usuari"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
