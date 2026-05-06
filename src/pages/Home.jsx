function Home() {
  return (
    <div style={{
      backgroundColor: '#0A0A0A',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#D4AF37',
        fontSize: '5rem',
        fontWeight: 'bold',
        letterSpacing: '0.2rem',
        marginBottom: '1rem'
      }}>
        MAKA GR
      </h1>

      <p style={{
        color: '#F5F5F0',
        fontSize: '1.3rem',
        marginBottom: '0.5rem'
      }}>
        Artiste · ingenieur · Entrepreneur
      </p>

      <p style={{
        color: '#D4AF37',
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '3rem'
      }}>
        "L'aigle n'attend pas le vent, il apprend à voler."
      </p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="/music" style={{
          backgroundColor: '#D4AF37',
          color: '#0A0A0A',
          padding: '0.8rem 2rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '4px'
        }}>
          🎵 Ma Musique
        </a>
        <a href="/projects" style={{
          border: '2px solid #D4AF37',
          color: '#D4AF37',
          padding: '0.8rem 2rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '4px'
        }}>
          💻 Mes Projets
        </a>
      </div>
    </div>
  )
}

export default Home