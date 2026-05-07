function Music() {
  const tracks = [
    { titre: 'Titre 1', duree: '3:45', statut: 'Disponible', genre: 'Afrobeat' },
    { titre: 'Titre 2', duree: '4:12', statut: 'Disponible', genre: 'Afropop' },
    { titre: 'Titre 3', duree: '3:58', statut: 'Coming Soon', genre: 'Afrobeat' },
    { titre: 'Titre 4', duree: '4:30', statut: 'Coming Soon', genre: 'Afropop' },
  ]

  const plateformes = [
    { nom: 'Spotify', emoji: '🎧' },
    { nom: 'YouTube', emoji: '▶️' },
    { nom: 'Apple Music', emoji: '🎵' },
    { nom: 'Deezer', emoji: '🎶' },
  ]

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>

      {/* HERO MUSIC */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center', borderBottom: '1px solid #D4AF37' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '4rem', marginBottom: '1rem' }}>
          MA MUSIQUE
        </h1>
        <p style={{ color: '#F5F5F0', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Afrobeat · Afropop · Madagascar
        </p>
        <p style={{ color: '#888', fontSize: '1rem', fontStyle: 'italic' }}>
          La musique africaine est mon âme, mon expression, mon identité.
        </p>
      </div>

      {/* TITRES */}
      <div style={{ padding: '5rem 2rem' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          MES TITRES
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {tracks.map((track, index) => (
            <div key={index} style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '1.2rem 1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#D4AF37', fontSize: '1.5rem', cursor: 'pointer' }}>▶</span>
                <div>
                  <p style={{ color: '#F5F5F0', fontWeight: 'bold', margin: 0 }}>{track.titre}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>MAKA GR · {track.genre}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ color: '#888' }}>{track.duree}</span>
                <span style={{ color: track.statut === 'Coming Soon' ? '#888' : '#D4AF37', border: `1px solid ${track.statut === 'Coming Soon' ? '#888' : '#D4AF37'}`, padding: '0.2rem 0.8rem', borderRadius: '9999px', fontSize: '0.75rem' }}>
                  {track.statut}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PLATEFORMES */}
      <div style={{ backgroundColor: '#1A1A1A', padding: '5rem 2rem' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          RETROUVE-MOI SUR
        </h2>
        <p style={{ color: '#F5F5F0', textAlign: 'center', marginBottom: '3rem' }}>
          Ma musique disponible sur toutes les plateformes
        </p>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
          {plateformes.map((p, i) => (
            <button key={i} style={{ backgroundColor: '#0A0A0A', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '8px', padding: '1.5rem', fontSize: '1rem', cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{p.emoji}</div>
              {p.nom}
            </button>
          ))}
        </div>
      </div>

      {/* COMING SOON */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '1rem' }}>
          BIENTÔT DISPONIBLE
        </h2>
        <p style={{ color: '#F5F5F0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          De nouveaux projets musicaux sont en préparation. 
          Suis-moi sur les réseaux pour ne rien manquer. 🦅
        </p>
      </div>

    </div>
  )
}

export default Music