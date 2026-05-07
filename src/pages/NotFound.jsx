import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>

      <h1 style={{ color: '#D4AF37', fontSize: '8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        404
      </h1>

      <p style={{ color: '#F5F5F0', fontSize: '1.5rem', marginBottom: '1rem' }}>
        Cette page n'existe pas.
      </p>

      <p style={{ color: '#888', fontSize: '1rem', fontStyle: 'italic', marginBottom: '3rem' }}>
        "Même l'aigle se perd parfois — mais il retrouve toujours son chemin."
      </p>

      <Link to="/" style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', padding: '1rem 2.5rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px' }}>
        🦅 Retour à l'accueil
      </Link>

    </div>
  )
}

export default NotFound