function Music() {
  const tracks = [
    { titre: 'Titre 1', duree: '3:45', statut: 'Disponible' },
    { titre: 'Titre 2', duree: '4:12', statut: 'Disponible' },
    { titre: 'Titre 3', duree: '3:58', statut: 'Coming Soon' },
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <h1 className="text-[#D4AF37] text-5xl text-center mb-4">
        MA MUSIQUE
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Afrobeat · Afropop · Madagascar
      </p>

      <div style={{ maxWidth: '800px', width: '100%', padding: '0 2rem' }}>

        <h2 className="text-[#D4AF37] text-3xl mb-6">🎵 Mes Titres</h2>

        {tracks.map((track, index) => (
          <div key={index} style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#D4AF37', fontSize: '1.5rem' }}>▶</span>
              <div>
                <p style={{ color: '#F5F5F0', fontWeight: 'bold', margin: 0 }}>{track.titre}</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>MAKA GR</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ color: '#888' }}>{track.duree}</span>
              <span style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem' }}>
                {track.statut}
              </span>
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginTop: '3rem' }}>
          <h2 className="text-[#D4AF37] text-2xl mb-6">🎧 Retrouve-moi sur</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['Spotify', 'YouTube', 'Apple Music'].map((p, i) => (
              <button key={i} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px', backgroundColor: 'transparent', cursor: 'pointer' }}>
                {p}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Music