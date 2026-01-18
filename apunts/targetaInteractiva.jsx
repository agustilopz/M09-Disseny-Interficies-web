import { useState } from 'react';

function TargetaInteractiva() {
  const [expandit, setExpandit] = useState(false);

  const toggle = () => setExpandit(!expandit);

  const gestionarTeclat = (e) => {
    if (e.key === 'Enter') toggle();
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={gestionarTeclat}
      onClick={toggle}
      role="button"
      aria-expanded={expandit}
      style={{
        border: '2px solid #333',
        padding: '10px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
      className="targeta-focusable"
    >
      <h3>Fes clic o prem Enter per veure detalls</h3>
      {expandit && <p>Aquests són els detalls que ara pots veure</p>}
    </div>
  );
}
