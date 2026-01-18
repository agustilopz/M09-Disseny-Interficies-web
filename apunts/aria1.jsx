// Quan utilitzes un element que no és un botó (com un div o un span) per fer una acció, 
// no només necessites el role="button", sinó que has de recrear manualment el comportament 
// que un <button> natiu té: ser clicable amb teclat i rebre focus.
function App() {
  const ferAccio = () => {
    alert("Has activat el botó!");
  };

  const gestionarTeclat = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      ferAccio();
    }
  };

  return (
    <div>
      <h3>Botó</h3>

      <div
        role="button"
        tabIndex="0"
        onClick={ferAccio}
        onKeyDown={gestionarTeclat}
      >
        Desa els canvis
      </div>
    </div>
  );
}

export default App;
