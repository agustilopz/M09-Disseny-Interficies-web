import { useRef } from 'react';
import './App.css';

/* Implementar un botó que, en fer-hi clic, faci que el focus se situï en un formulari o element específic de la pàgina. */
function App() {
  //Això crea un objecte "ref". A diferència de useState, canviar una referència no provoca que el component es torni a renderitzar.
  const inputRef = useRef(null);

  const gestionarFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();// Dins de la funció gestionarFocus, accedim a l'API nativa del navegador. Com que tenim l'element real, podem cridar qualsevol mètode de JavaScript estàndard, com .focus(), .scrollIntoView(), o llegir propietats com .value.
      inputRef.current.select();
    }
  };

  return (
    <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Exemple amb useRef</h1>
      <p>Fes clic al botó per escriure directament al formulari.</p>

      <div style={{ marginTop: '20px' }}>
        <input
          // React detecta l'atribut ref i, quan crea l'element DOM real per a aquest <input>, assigna aquest node DOM a inputRef.current. Ara inputRef.current és l'etiqueta HTML <input>.
          ref={inputRef}
          type="text"
          placeholder="Escriu aquí..."
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />

        <button onClick={gestionarFocus} style={{ padding: '10px 20px' }}>
          Fer focus al Input
        </button>
      </div>
    </div>
  );
}

export default App;
