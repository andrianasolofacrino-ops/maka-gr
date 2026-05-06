function Music() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', padding: '4rem 2rem' }}>

      <h1 style={{ color: '#D4AF37', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
        MA MUSIQUE
      </h1>

      <p style={{ color: '#F5F5F0', textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
        Afrobeat · Afropop · Madagascar
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <h2 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          🎵 Mes Titres
        </h2>

        {[
          { titre: 'Titre 1', duree: '3:45', statut: 'Disponible' },
          { titre: 'Titre 2', duree: '4:12', statut: 'Disponible' },
          { titre: 'Titre 3', duree: '3:58', statut: 'Coming Soon' },
        ].map((track, index) => (
          <div key={index} style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #D4AF37',
            borderRadius: '8px',
            padding: '1rem 1.5rem',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.5rem' }}>▶</span>
              <div>
                <p style={{ color: '#F5F5F0', fontWeight: 'bold', margin: 0 }}>{track.titre}</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>MAKA GR</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <span style={{ color: '#888' }}>{track.duree}</span>
              <span style={{
                color: track.statut === 'Coming Soon' ? '#888' : '#D4AF37',
                fontSize: '0.8rem',
                border: `1px solid ${track.statut === 'Coming Soon' ? '#888' : '#D4AF37'}`,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px'
              }}>
                {track.statut}
              </span>
            </div>
          </div>
        ))}

        <div style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #D4AF37',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ color: '#D4AF37', marginBottom: '1rem' }}>🎧 Retrouve-moi sur</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            {['Spotify', 'YouTube', 'Apple Music'].map((platform, i) => (
              <a key={i} href="#" style={{
                color: '#D4AF37',
                textDecoration: 'none',
                border: '1px solid #D4AF37',
                padding: '0.5rem 1.2rem',
                borderRadius: '4px'
              }}>
                {platform}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Music