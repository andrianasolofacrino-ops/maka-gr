import { Link } from 'react-router-dom'

function Footer() {
  const liens = [
    { nom: 'Home', lien: '/' },
    { nom: 'About', lien: '/about' },
    { nom: 'Music', lien: '/music' },
    { nom: 'Projects', lien: '/projects' },
    { nom: 'Contact', lien: '/contact' },
  ]

  const reseaux = [
    { nom: 'GitHub', lien: 'https://github.com/andrianasolofacrino-ops' },
    { nom: 'LinkedIn', lien: '#' },
    { nom: 'YouTube', lien: '#' },
    { nom: 'Instagram', lien: '#' },
  ]

  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #D4AF37' }}>

      {/* CONTENU PRINCIPAL */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

        {/* IDENTITÉ */}
        <div>
          <h3 style={{ color: '#D4AF37', fontSize: '1.8rem', letterSpacing: '0.2rem', marginBottom: '1rem' }}>
            MAKA GR
          </h3>
          <p style={{ color: '#F5F5F0', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            Artiste · Développeur · Entrepreneur
          </p>
          <p style={{ color: '#888', fontSize: '0.85rem', fontStyle: 'italic' }}>
            "L'aigle n'attend pas le vent, il apprend à voler."
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.1rem' }}>
            NAVIGATION
          </h3>
          {liens.map((item, i) => (
            <Link key={i} to={item.lien}
              style={{ display: 'block', color: '#F5F5F0', textDecoration: 'none', marginBottom: '0.8rem', fontSize: '0.95rem' }}
              onMouseEnter={e => e.target.style.color = '#D4AF37'}
              onMouseLeave={e => e.target.style.color = '#F5F5F0'}>
              {item.nom}
            </Link>
          ))}
        </div>

        {/* RÉSEAUX */}
        <div>
          <h3 style={{ color: '#D4AF37', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.1rem' }}>
            RÉSEAUX
          </h3>
          {reseaux.map((item, i) => (
            <a key={i} href={item.lien} target="_blank" rel="noreferrer"
              style={{ display: 'block', color: '#F5F5F0', textDecoration: 'none', marginBottom: '0.8rem', fontSize: '0.95rem' }}
              onMouseEnter={e => e.target.style.color = '#D4AF37'}
              onMouseLeave={e => e.target.style.color = '#F5F5F0'}>
              {item.nom}
            </a>
          ))}
        </div>

      </div>

      {/* COPYRIGHT */}
      <div style={{ borderTop: '1px solid #1A1A1A', padding: '1.5rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: '0.85rem' }}>
          © 2026 MAKA GR — Théogène Facrino · Tous droits réservés · Antananarivo, Madagascar
        </p>
      </div>

    </footer>
  )
}

export default Footer