function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #D4AF37', padding: '2rem', textAlign: 'center' }}>
      <p style={{ color: '#D4AF37', fontSize: '1.3rem', fontWeight: 'bold', letterSpacing: '0.2rem', marginBottom: '0.5rem' }}>
        MAKA GR
      </p>
      <p style={{ color: '#F5F5F0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        Artiste · Développeur · Entrepreneur · Madagascar
      </p>
      <p style={{ color: '#888', fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
        "L'aigle n'attend pas le vent, il apprend à voler."
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        {['GitHub', 'LinkedIn', 'YouTube', 'Instagram'].map((r, i) => (
          <button key={i} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.3rem 1rem', borderRadius: '4px', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '0.85rem' }}>
            {r}
          </button>
        ))}
      </div>
      <p style={{ color: '#888', fontSize: '0.75rem' }}>
        © 2026 MAKA GR — Tous droits réservés
      </p>
    </footer>
  )
}

export default Footer